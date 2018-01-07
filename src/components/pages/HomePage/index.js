// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { VoicePlayer, VoiceRecognition } from 'babel-loader!react-voice-components'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import { Button, Container, Icon, Loader, Menu } from "semantic-ui-react"
import fuzzy from 'fuzzy'

// import Player from '../../molecules/VideoPlayer/player'

import 'style-loader!css-loader?modules!./index.css'

import semanticJS from 'semantic-ui/dist/semantic.min.js'
// import 'style-loader!css-loader?modules!semantic-ui/dist/semantic.css'
// import 'style-loader!css-loader?modules!semantic-ui/dist/components/button.min.css'
// import 'style-loader!css-loader?modules!semantic-ui/dist/components/container.min.css'
// import 'style-loader!css-loader?modules!semantic-ui/dist/components/icon.min.css'
// import 'style-loader!css-loader?modules!semantic-ui/dist/components/loader.min.css'
// import 'style-loader!css-loader?modules!semantic-ui/dist/components/menu.min.css'

class TitleView extends Component {
  render() {
    const { videos, activeVideo } = this.props

    let titles = []
    videos.forEach( (vid, i, all) => {
      titles.push(
        <Menu.Item key={vid.key} slug={vid.key} name={vid.name} onClick={this.props.navigate}
          active={(activeVideo.name == vid.name)} >
          {vid.name}
        </Menu.Item>
      )
    })

    return (
      <Menu pointing vertical items={titles} />
    )
  }
}

class Player extends Component {
  render() {
    let url, className = ""

    if (this.props.view != "title")
      url = this.props.videos.filter( (vid) => {
        return (vid.key == this.props.activeVideo)
      })[0].url
    else
      className = "hidden"

    console.log("Loading video: " + url)
    return(
      <ReactPlayer url={url} className={className} controls playing
        onReady={() => console.log('onReady')}
        onStart={() => console.log('onStart')}
        onError={() => console.log('onError')}
      />
    )
  }
}

class Recorder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      recording: null
    }
  }

  startRecording() {
    this.state.recording.start()
    this.setState({open: true})
  }

  stopRecording() {
    this.state.recording.stop()
    this.setState({open: false})
  }

  toggle() {
    if (this.state.open)
      this.stopRecording()
    else
      this.startRecording()
  }

  render() {
    let label, background, grammar, className
    let nameList = []

    if (this.state.open) {
      console.log("We're currently recording.")
      label = "Recording Open"
      className = "open"
    }
    else {
      label = "Recording Closed"
      className = "closed"
    }

    this.props.videos.forEach( (vid, i, all) => {
      nameList.push(vid.name)
    })
    grammar = '#JSGF V1.0; grammar videos; public <video> = ' + nameList.join(' | ') + ' ;'

    if (this.state.recording) {
      this.state.recording.grammars.addFromString(grammar)
    }

    return (
      <Button onClick={() => {this.toggle()}} className={className}>
        <Icon name="microphone" />
        {label}
        <VoiceRecognition
          continuous={true}
          onStart={(evt) => {
            console.log(evt)
            this.setState({open: true, recording: evt.target})
          }}
          onResult={(evt) => {
            console.log(evt)
            let result = null
            result = fuzzy.filter(evt.finalTranscript, nameList)[0]

            if (result) {
              console.log("I think you said " + result.string)
            }
            else {
              console.log("You have to say something on the list.")
            }

            let dest = this.props.videos.filter( (v) => v.name == result.string )[0].key
            this.props.navigate(dest)
          }}
          onEnd={(evt) => {
            console.log(evt)
            this.setState({open: false, recording: evt.target})
          }}
        />
      </Button>
    )
  }
}

class Holocron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      response: "",
      view: "title",
      activeVideo: "bluespin"
    }

    this.videos = [
      {
        name: "Blue Spin",
        key: "bluespin",
        url: 'https://www.dropbox.com/s/syolzmu250crd3x/AR_BLUE_4_512kb.mp4'
      },
      {
        name: "Rabbit Hole",
        key: "rabbithole",
        url: 'https://www.dropbox.com/s/xe6umzvakwo38hf/AR_COLOUR_1_512kb.mp4'
      },
      {
        name: ".react",
        key: "dotreact",
        url: 'https://www.dropbox.com/s/uy3qj3gbls50apw/AR_GRAFX_GLO_1_512kb.mp4'
      },
      {
        name: "The Three Spheres at the End of the Universe",
        key: "threespheres",
        url: 'https://www.dropbox.com/s/ztpskhush2kk4hf/AR_GRAFX_GLO_2_512kb.mp4'
      },
      {
        name: "Fiery Knobs",
        key: "knobs",
        url: 'https://www.dropbox.com/s/ct3xs317eclmcl6/AR_GRAFX_KNOBS_512kb.mp4'
      },
      {
        name: "Purple Tesseract",
        key: "tesseract",
        url: 'https://www.dropbox.com/s/knstjnle123oxey/AR_GRAFX_PURPLE_2_512kb.mp4'
      }
    ]

    this.navigate = this.navigate.bind(this)
  }

  componentDidMount() {
    let c = {
        part: 'id,snippet',
        playlistId: 'PLLCvyMTFX6UbTsPaBVEGvejUL4yZC1ExQ',
        key: 'AIzaSyAeeVWvyfGbzZd5dBrkkAPe7IAUu6HcqRo'
    }
    let videos = []
    let playlist = {items: require('./playlist.json')}

    // Note to future self: Google API calls have to be aimed at `www.googleapis.com`, not `googleapis.com`.
    // return fetch('https://googleapis.com/youtube/v3/playlistItems?part=' + c.part + '&playlistId=' + c.playlistId + '&key=' + c.key, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     }
    // }).then( (response) => response.json()).then( (playlist) => {
      playlist.items.map( (v,i,a) => {
        videos.push({
          name: v.snippet.title,
          key: v.snippet.resourceId.videoId,
          url: "https://youtube.com/watch?v=" + v.snippet.resourceId.videoId
        })
      })

      this.setState({
        isLoading: false,
        videos: videos
      })
    // }).catch( (error) => {
    //   console.error(error)
    // })
  }

  navigate(dest) {
    let slug
    console.log(dest)
    if (typeof dest != String)
      slug = dest.target.getAttribute('slug')
    else
      slug = dest

    if (slug === "title") {
      console.log("Activating the title view")
      this.setState({
        view: "title",
      })
    }
    else {
      console.log("Video '" + slug + "' selected.")
      this.setState({
        view: "video",
        activeVideo: slug
      })
    }
  }

  render () {
    if (this.state.isLoading) {
      return (
        <Container>
          <Helmet>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
          </Helmet>

          <Loader />
        </Container>
      );
    }

    console.log("App component loaded. View: " + this.state.view)

    let activeVideo
    activeVideo = this.videos.filter(v => v.id === this.state.activeVideo)[0]
    if (!activeVideo)
      activeVideo = {file: null, name: null, key: null}

    return (
      <Container>
        <Helmet>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
        </Helmet>

        <Container>
          <TitleView videos={this.videos} navigate={this.navigate}
            {...this.state} />
          <Recorder videos={this.videos} navigate={this.navigate}
            {...this.state} />
        </Container>

        <Player videos={this.videos} navigate={this.navigate}
          {...this.state} />
      </Container>
    )
  }
}

const HomePage = () => {
  return (
    <Holocron />
  )
}

export default HomePage
