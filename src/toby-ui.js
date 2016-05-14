// toby-ui.js - Front end code for Toby
// Copyright (C) 2016 Frank Hale <frankhale@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

const appTitle = "Toby - A Simple YouTube Player";

class TobyUI extends React.Component {
  constructor() {
    super();

    this.onCommandEntered = this.onCommandEntered.bind(this);
    this.addVideoButtonHandler = this.addVideoButtonHandler.bind(this);

    this.state = {
      videoData: [],
      searchResults: [],
      applyFilter: "",
      currentVideo: ""
    };
  }
  performSearch(searchTerm) {
    $.post({
      url: "/api/videos/search",
      data: { searchTerm: searchTerm }
    })
    .done(function(data) {
      this.setState({
        searchResults: this.buildVideoResults(data)
      });
    }.bind(this));
  }
  onCommandEntered(searchTerm) {
    let commandSegments = searchTerm.split(" ");
    let command = commandSegments[0];

    switch(command) {
      case "/videos":
        $.ajax({
          url: '/api/videos'
        }).done(function(data) {
          console.log(data);
        });
        break;
      case "/groups":
        $.ajax({
          url: '/api/videos/groups'
        }).done(function(data) {
          console.log(data);
        });
        break;
      // case "/raw":
      //   $.ajax({
      //     url: '/api/videos/raw'
      //   }).done(function(data) {
      //     console.log(data);
      //   });
      //   break;
      case "/archive":
        $.ajax({
          url: '/api/videos/archive'
        }).done(function(data) {
          console.log(data);
        });
        break;
      case "/list":
        $.ajax({
          url: '/api/videos'
        }).done(function(data) {
          this.setState({
            searchResults: this.buildVideoResults(data)
          });
        }.bind(this));
        break;
      case "/clear":
        this.setState({
          searchResults: [],
          currentVideo: {},
          applyFilter: ""
        });
        document.title = appTitle;
        if(socket!==undefined) {
          socket.emit("title", { title: appTitle });
        }
        break;
      case "/mc":
        this.setState({ applyFilter: "grayscale" });
        break;
      case "/sat":
        this.setState({ applyFilter: "saturate" });
        break;
      case "/sep":
        this.setState({ applyFilter: "sepia" });
        break;
      case "/filter":
        if(commandSegments.length > 0) {
          switch(commandSegments[1]) {
            case "monochrome":
            case "grayscale":
              this.setState({ applyFilter: "grayscale" });
              break;
            case "saturate":
              this.setState({ applyFilter: "saturate" });
              break;
            case "sepia":
              this.setState({ applyFilter: "sepia" });
              break;
            case "normal":
              this.setState({ applyFilter: "normal" });
              break;
          }
        }
        break;
      case "/history":
      case "/rp": // shortcut to get a listing of recently played
        this.performSearch("g: Recently Played");
        break;
      case "/rptrim":
        $.post({
          url: "/api/videos/recently-played/trim"
        }).done(function(data) {
          console.log(data);
        });
        break;
      // case "/shutdown":
      //   $.post({
      //     url: '/api/app/close'
      //   });
      //   break;

      default:
        this.performSearch(searchTerm);
        break;
    }
  }
  componentDidMount() {
    document.title = appTitle;

    if(socket!==undefined) {
      // User clicked on a recommended video at the end of playing a video
      socket.on("play-video", function(data) {
        this.setState({
          // Once the video loads we'll get a notification from YouTube
          // about what the title is. Then everything falls into place.
          currentVideo: {
            title: "",
            ytid: data.ytid
          }
        }, function() {
          this.playVideo(data);
        });
      }.bind(this));
    }

    $.ajax({
      url: '/api/videos/groups'
    }).done(function(data) {
      console.log(data);
      this.setState({
        groups: data
      })
    }.bind(this));
  }
  buildVideoResults(data) {
    var results = [];

    _.forEach(data, function(v) {

      // Image thumbnail URL looks like this:
      //
      // https://i.ytimg.com/vi/YTID/default.jpg
      // https://i.ytimg.com/vi/YTID/mqdefault.jpg
      // https://i.ytimg.com/vi/YTID/hqdefault.jpg

      results.push({
        //player: this.state.player,
        playVideo: this.playVideo.bind(this),
        title: v.title,
        ytid: v.ytid,
        thumbnail: `https://i.ytimg.com/vi/${v.ytid}/default.jpg`,
        isArchived: v.isArchived
      });
    }.bind(this));

    return results;
  }
  addVideoButtonHandler(video, group) {
    let found = _.find(this.state.searchResults, { ytid: video.ytid });

    if(found !== undefined) {
      found.isArchived = true;

      $.post({
        url: "/api/videos/add",
        data: {
          title: video.title,
          ytid: video.ytid,
          group: (group !== undefined) ? group : "misc"
        }
      });
    }
  }
  playVideo(video, data) {
    this.setState({
      currentVideo: video,
      searchResults: data
    });

    if(video.title !== undefined && video.title.length > 0) {
      $.post({
        url: "/api/videos/recently-played/add",
        data: {
          title: video.title,
          ytid: video.ytid
        }
      });
    }
  }
  render() {
    return (
      <div>
        <CommandInput onKeyEnter={this.onCommandEntered} />
        <VideoList data={this.state.searchResults}
                   groups={this.state.groups}
                   applyFilter={this.state.applyFilter}
                   addVideoButtonHandler={this.addVideoButtonHandler} />
        <YouTubeUI video={this.state.currentVideo} applyFilter={this.state.applyFilter} />
      </div>
    );
  }
}

$(document).ready(function() {
  ReactDOM.render(<TobyUI />, document.getElementById("ui"));
});
