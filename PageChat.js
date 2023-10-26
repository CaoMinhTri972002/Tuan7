import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { Image } from 'react-native';
import { Button} from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';


export default function App() {
    return (
      <View style={styles.container}>
    

        <StatusBar style="auto" />
          <View style={styles.style1}>
            <View style={styles.chatview}>
    <Pressable> <Image source={require('./assets/arrow.png')}
                  style={{width:24,height:24}}>
         
      </Image></Pressable>
<Text style={{color:'white',position:'absolute', left:180, top:10}}>Chat</Text>
<Image source={require('./assets/gioHang.png')}
      style={{width:24,height:24, position:'absolute', left: 350}}
    ></Image>
 </View>



</View>

          <View style={styles.style2}>
            <View style={styles.ngaiChat}>
            <Text>Ban co thac mac voi san pham vua xem.Dung ngai<br/>
                   chat voi shop
            </Text>
            </View>
         </View>

  <View style={styles.style3}>
  
  <View>
    <Image source={require('./assets/ca_nau_lau.png')}
    style={{width:74,height:74}}></Image>
  </View>
  <View style={styles.mini}>
  <Text>Ca nau lau, nau mi mini</Text>
  </View>
  <View style={styles.mini1}>
    <Pressable>
  <Text style={{color:'red'}}>Shop Devang</Text>
  </Pressable>
  </View>  
        <View style={styles.chat1}>
          <TouchableOpacity>
            <Text style={{color:'white'}}>Chat</Text>
          </TouchableOpacity>
        </View>

</View>

          <View style={styles.style4}>
          <View>
    <Image source={require('./assets/ga_bo_toi.png')}
    style={{width:74,height:74}}></Image>
  </View>
  <View style={styles.mini}>
  <Text>Ca nau lau, nau mi mini</Text>
  </View>
  <View style={styles.mini1}>
    <Pressable>
  <Text style={{color:'red'}}>Shop Devang</Text>
  </Pressable>
  </View>  
        <View style={styles.chat1}>
          <TouchableOpacity>
            <Text style={{color:'white'}}>Chat</Text>
          </TouchableOpacity>
        </View>






  </View>


  <View style={styles.style5}>
  <View>
    <Image source={require('./assets/xa_can_cau.png')}
    style={{width:74,height:74}}></Image>
  </View>
  <View style={styles.mini}>
  <Text>Ca nau lau, nau mi mini</Text>
  </View>
  <View style={styles.mini1}>
    <Pressable>
  <Text style={{color:'red'}}>Shop Devang</Text>
  </Pressable>
  </View>  
        <View style={styles.chat1}>
          <TouchableOpacity>
            <Text style={{color:'white'}}>Chat</Text>
          </TouchableOpacity>
        </View>

  </View>

  <View style={styles.style6}>
  <View>
    <Image source={require('./assets/do_choi_dang_mo_hinh.png')}
    style={{width:74,height:74}}></Image>
  </View>
  <View style={styles.mini}>
  <Text>Ca nau lau, nau mi mini</Text>
  </View>
  <View style={styles.mini1}>
    <Pressable>
  <Text style={{color:'red'}}>Shop Devang</Text>
  </Pressable>
  </View>  
        <View style={styles.chat1}>
          <TouchableOpacity>
            <Text style={{color:'white'}}>Chat</Text>
          </TouchableOpacity>
        </View>
  </View>

  <View style={styles.style7}>
  <View>
    <Image source={require('./assets/lanh_dao_gian_don.png')}
    style={{width:74,height:74}}></Image>
  </View>
  <View style={styles.mini}>
  <Text>Ca nau lau, nau mi mini</Text>
  </View>
  <View style={styles.mini1}>
    <Pressable>
  <Text style={{color:'red'}}>Shop Devang</Text>
  </Pressable>
  </View>  
        <View style={styles.chat1}>
          <TouchableOpacity>
            <Text style={{color:'white'}}>Chat</Text>
          </TouchableOpacity>
        </View>

    </View>


      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundImage:'linear-gradient(to bottom,white, cyan)'
    },
    ngaiChat:{
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center'
     
    
    },
mini:{
   position:'absolute',
   top:20,
   left:100
},
mini1:{
  position:'absolute',
  top:50,
   left:100
},
chat1:{
  backgroundColor:'red',
  width:88,
  height:38,
alignItems:'center',
justifyContent:'center',
  position:'absolute',
  top:30,
   left:280,
   
},

    txt2:{
    position:'absolute',
    top:160,
    left:25,
    width:1000
    },
    gioHang:{
      positionL:'absolute',
      Button:10
    },
   
    
    btn5:{
     backgroundColor:'#E53935',
    height:50,
    width:340,
    position:'absolute',
    left:35,
    top :120
    },
  
    btn3:{
       backgroundColor:'#0A5EB7',
       width:75,
       height:40,
       padding:8,
       position:'absolute',
       top:200,
       left:250
    },

    tien:{
        position:'absolute',
        top:30,
        left:300
    },
    tamtinh:{
     position:'absolute',
     top:30,
     left:20
    },
    thanhTien:{
        position:'absolute',
        top:75,
        left:20,
        
      },
      tien1:{
        position:'absolute',
        top:1,
        left:300
      },
    magiamgia:{
      borderColor:'black',
      borderWidth:'1px',
      width:200,
      height:45,
      position:'absolute',
      top:200,
      padding:10,
      flexDirection:'row'
    },
    magiamgia1:{
backgroundColor:'#F2DD1B',
height:25,
width: 50,


    },
    style1:{
  flex:0.2,
  backgroundColor:'#1BA9FF'
    },
   pic:{
    position:'absolute',
    width:150,
    height:150,
    left:10,
    top: 10
    },
    link:{
        position:'absolute',
       
        left:150,
   color:'blue'
    },
Text:{
    position:'absolute',
    left:165
},
btn1:{
    backgroundColor:'gray',
    width:'30px'
},
btn2:{
    backgroundColor:'gray',
    width:'30px',
    position:'absolute',
    left:65,
    top:100

},
textstyle3:{
    
    position:'absolute',
    top:30,
    left:20,
    flexDirection:'row'
},
    style2:{
        flex:0.3,
        backgroundColor:'#C4C4C4',
        justifyContent:'center'
    },
    style3:{
        flex:0.5,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'gray'

    },
 
    
    style4:{
        flex:0.5,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'lightgray'
    },
    style5:{
        flex:0.5,
        backgroundColor:'white'
      },
      style6:{
        flex:1,
        backgroundColor:'white'
    },
    style7:{
        flex:1,
        backgroundColor:'white'
      },











  });
  