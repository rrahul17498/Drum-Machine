
// Audio Data
const data1 = {
  Q: {
    label: "Q",
    keyCode: "81",
    name: "HEATER1",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

  W: {
    label: "W",
    keyCode: "87",
    name: "HEATER2",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

  E: {
    label: "E",
    keyCode: "69",
    name: "HEATER3",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

  A: {
    label: "A",
    keyCode: "65",
    name: "HEATER4",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

  S: {
    label: "S",
    keyCode: "83",
    name: "CLAP",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

  D: {
    label: "D",
    keyCode: "68",
    name: "OPENHH",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

  Z: {
    label: "Z",
    keyCode: "90",
    name: "KICK N HAT",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

  X: {
    label: "X",
    keyCode: "88",
    name: "KICK",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

  C: {
    label: "C",
    keyCode: "67",
    name: "CLOSEDHH",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" } };



const data2 = {
  Q: {
    label: "Q",
    keyCode: "81",
    name: "CHORD1",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

  W: {
    label: "W",
    keyCode: "87",
    name: "CHORD2",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

  E: {
    label: "E",
    keyCode: "69",
    name: "CHORD3",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

  A: {
    label: "A",
    keyCode: "65",
    name: "SHAKER",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },

  S: {
    label: "S",
    keyCode: "83",
    name: "OPENHH",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },

  D: {
    label: "D",
    keyCode: "68",
    name: "CLOSEDHH",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },

  Z: {
    label: "Z",
    keyCode: "90",
    name: "PUNCHY KICK",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },

  X: {
    label: "X",
    keyCode: "88",
    name: "SIDE STICK",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },

  C: {
    label: "C",
    keyCode: "67",
    name: "SNARE",
    url:
    "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" } };



class ControlPanel extends React.Component {
  constructor() {
    super();
  }

  //Activating all buttons in Control Panel from On-Off/Power button.
  componentDidUpdate() {
    if (this.props.power) {
      document.getElementById("button-on-off").classList.add("activateMachine");
      document.getElementById("button-bank").classList.add("activateMachine");
      document.getElementById("volume-slider").classList.add("activateMachine");
    } else {
      document.
      getElementById("button-on-off").
      classList.remove("activateMachine");
      document.
      getElementById("button-bank").
      classList.remove("activateMachine");
      document.
      getElementById("volume-slider").
      classList.remove("activateMachine");
    }
  }

  render() {
    return (
      React.createElement("div", { className: "row" },
      React.createElement("div", { id: "control-board", className: "col-md-12" },
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-md-4" },
      React.createElement("button", {
        id: "button-on-off",
        className: "fas fa-power-off",
        onClick: this.props.handlePower })),


      React.createElement("div", { className: "col-md-8" },
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-md-12" },
      React.createElement("button", {
        id: "button-bank",
        onClick: this.props.handleAudioSourceData },

      this.props.instrument)),


      React.createElement("div", { className: "col-md-12" },
      React.createElement("input", {
        type: "range",
        min: "1",
        max: "100",
        "default-value": "50",
        className: "slider",
        id: "volume-slider",
        onChange: this.props.handleVolume }))))))));








  }}


class DrumMachineBody extends React.Component {
  constructor() {
    super();
  }

  // Activating Display from On-Off/Power button

  componentDidUpdate() {
    if (this.props.power) {
      document.getElementById("display").classList.add("activateMachine");
    } else
    document.getElementById("display").classList.remove("activateMachine");
  }

  render() {
    return (
      React.createElement("div", { id: "machine-board", className: "row" },
      React.createElement("div", { id: "display", className: "col-md-10 offset-md-1" },
      React.createElement("h2", { id: "display-text" }, this.props.displayContent)),


      React.createElement("div", { className: "row" },
      Object.values(this.props.audioSourceData).map((x) =>
      React.createElement(DrumKey, {
        keyData: x,
        power: this.props.power,
        volume: this.props.volume,
        updateDisplay: this.props.updateDisplay })))));





  }}


class DrumKey extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.power) {
      document.getElementById(this.props.keyData.label).play();
      this.props.updateDisplay(this.props.keyData.name);
    }
  }
  // Activating/De-Activating Drumkeys from On-Off/Power button
  componentDidUpdate() {
    if (this.props.power) {
      document.
      getElementById(this.props.keyData.keyCode).
      classList.add("activateMachine");
      document.getElementById(this.props.keyData.label).volume =
      this.props.volume / 100; // Setting volume for all Drumkeys
    } else
    document.
    getElementById(this.props.keyData.keyCode).
    classList.remove("activateMachine");
  }

  render() {
    return (
      React.createElement("div", { className: "col-4 col-md-4 text-center" },
      React.createElement("button", {
        className: "drum-pad",
        onClick: this.handleClick,
        id: this.props.keyData.keyCode },
      this.props.keyData.label,
      React.createElement("audio", {
        src: this.props.keyData.url,
        id: this.props.keyData.label,
        preload: "auto",
        className: "clip" }))));




  }}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPower: 0,
      currentVolume: 50,
      audioSourceData: data1,
      instrument: "Heater",
      displayContent: "DRUM MACHINE" };

    this.handlePower = this.handlePower.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.keyDownInput = this.keyDownInput.bind(this);
    this.keyUpInput = this.keyUpInput.bind(this);
    this.handleAudioSourceData = this.handleAudioSourceData.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  //Machine power(0/1) altered by On-Off/Power button
  handlePower() {
    if (!this.state.currentPower)
    this.setState({ currentPower: 1, displayContent: "DRUM MACHINE" });else
    this.setState({ currentPower: 0, displayContent: "GOOD BYE" });
  }

  // For switching instruments
  handleAudioSourceData() {
    if (this.state.currentPower) {
      if (this.state.instrument == "Heater")
      this.setState({
        audioSourceData: data2,
        instrument: "Piano Kit",
        displayContent: "PIANO KIT" });else


      this.setState({
        audioSourceData: data1,
        instrument: "Heater",
        displayContent: "HEATER" });

    }
  }

  // Volume altered by Volume slider input
  handleVolume(e) {
    if (this.state.currentPower) {
      this.setState({ currentVolume: e.target.value }); // Volume for audio tags to be set inside Drumkey Component
      document.getElementById("display-text").innerHTML =
      "VOL:  " + e.target.value;
    }
  }

  updateDisplay(text) {
    this.setState({ displayContent: text });
  }

  // Response functions for Keyboard Input - acting as parameter for keydown and keyup event listeners

  keyDownInput(e) {
    let keyDownCode = e.which ? e.which : e.keyCode; //For IE<8
    document.getElementById(String.fromCharCode(keyDownCode)).play();
    document.
    getElementById(keyDownCode.toString()).
    classList.add("drum-padKeydown");
    document.getElementById(
    "display-text").
    innerHTML = this.state.audioSourceData[
    String.fromCharCode(keyDownCode.toString())].
    name;
  }

  keyUpInput(e) {
    let keyUpCode = e.which ? e.which : e.keyCode; //For IE<8
    document.
    getElementById(keyUpCode.toString()).
    classList.remove("drum-padKeydown");
  }

  // Linking Keyboard inputs with drum keys
  componentDidUpdate() {
    if (this.state.currentPower) {
      document.addEventListener("keydown", this.keyDownInput);
      document.addEventListener("keyup", this.keyUpInput);
    } else {
      document.removeEventListener("keydown", this.keyDownInput);
      document.removeEventListener("keydown", this.keyUpInput);
    }
  }

  render() {
    return (
      React.createElement("div", { id: "drum-machine", className: "container-fluid" },
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-8 offset-2 col-md-4 offset-md-4 outer-board" },
      React.createElement("div", { className: "col-10 offset-1 col-md-10 offset-md-1" },
      React.createElement(ControlPanel, {
        power: this.state.currentPower,
        handlePower: this.handlePower,
        handleVolume: this.handleVolume,
        handleAudioSourceData: this.handleAudioSourceData,
        instrument: this.state.instrument,
        updateDisplay: this.updateDisplay }),

      React.createElement(DrumMachineBody, {
        power: this.state.currentPower,
        volume: this.state.currentVolume,
        audioSourceData: this.state.audioSourceData,
        displayContent: this.state.displayContent,
        updateDisplay: this.updateDisplay }))))));






  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));