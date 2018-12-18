import React , {Component} from "react";
import {View , Text , StyleSheet, StatusBar} from "react-native";
import Button from '../Button';

function formatTime(time) {
    var minutes=Math.floor(time/60);
    time -= minutes*60;
    
    var seconds  = parseInt(time%60, 10);

    return '${minutes) <10 ? '0$(minutes)' : minutes}:${seconds < 10 ? '0$ {seconds}' : seconds}';

    return;

    }
}

class Timer extends Component {

    componentWillReceiveProps(nextPros) {
        const currentProps= this.props;
        if(!currentProps.isPlaying && nextPros.isPlaying) {
            const timerInterval = setInterval(()=>{
                currentProps.addSecond();
                },1000);
            this.setState({
                interval : timerInterval
            });
        }
        else if(currentProps.isPlaying)
        clearInterval(this.state.interval);
        }

    }
  render() {
      const{
          isPlaying,
          elapsedTime,
          timeDuration,
          startTimer,
          restartTimer
      }
    return(
            <View style={styles.container}>
            <View style={styles.upper}>
              <Text style={styles.times}>25:00</Text>
            </View>
            <View style={styles.lower}>
              <Button iconName="play-circle" />
              <Button iconName="stop-circle" />
            </View>
            </View>
          
        );
    }
}

const styles = StyleSheet.create(
{
  container:{
    flex:1,
    backgroundColor:"green"

  },
  upper:{
    flex:2,
    justifyContent:"center",
    alignItems:"center"
  },
  lower:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  times:{
    color:"white",
    fontSize:"120",
    fontWeight:"100"
  },

}
);

export default Timer;