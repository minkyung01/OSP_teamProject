import React,{useContext, Component, useState } from 'react';
import {StatusBar, SafeAreaView,Pressable, View,Text, StyleSheet, Image, TextInput,ScrollView, Dimensions} from 'react-native';
import InfoContext from './components/InfoContext';
import {basicColor, themeColor} from './colors';
import { iconImages } from './images';
import { textStyles } from './styles';
import Title from './components/Title';
import Information from '../information';
import List from './components/List';

/*class Search extends Component {

    constructor(){
      super();
  
      this.state={
        search:null
      };
    }
  
    searchSpace=(event)=>{
      let keyword = event.target.value;
      this.setState({search:keyword})
    }
  
    render(){
      const styleInfo = {
        paddingRight:'10px'
      }
      const elementStyle ={
        border:'solid',
        borderRadius:'10px',
        position:'relative',
        left:'10vh',
        height:'3vh',
        width:'20vh',
        marginTop:'5vh',
        marginBottom:'10vh'
      }
      const items = Information.filter((data)=>{
        if(this.state.search == null)
            return data
        else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.task.toLowerCase().includes(this.state.search.toLowerCase())){
            return data
        }
      }).map(data=>{
        return(
            <View style={{position:'relative',left:'10vh'}}>
              <View style={styleInfo}>{data.task}</View>
            </View>
        )
      })
  
      return (
        <div>
        <TextInput type="text" placeholder="Enter a task to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
        {items}
        </div>
      )
    }
  }

  export default Search;*/
const Search = () => {
    const [search, setSearch] = useState('');
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const width = Dimensions.get('window').width;
    const userContext = useContext(InfoContext);
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <ScrollView width = {width-20} height = '80%'>
            <Title />

            <SafeAreaView style={{flexDirection: 'row',backgroundColor:userContext.SkinColor.dark}}>
            <Pressable onPress={()=>{setSearch(text); setCount(0);}}>
                <Image style={styles.search} source={iconImages.search} />
            </Pressable>
            <TextInput style={styles.searchBar}
                placeholder="Search a task" onChangeText={search=>setText(search)}>
            </TextInput>
            </SafeAreaView>

            <Text style={styles.text}>search result: {count}</Text>
            {
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.date<b.date?1:-1):((a,b)=>a.deadline<b.deadline?1:-1)).filter(LIST=>(search!='') && (LIST.todo.includes(search))).map(listItem => (
                
                <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:userContext.SkinColor.light,width:'100%',marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.result}>{listItem.todo}</Text>
                </SafeAreaView> 
            </SafeAreaView>))}
            </ScrollView>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        padding: 20,
    },
    content: {
        margin: 10,
        alignItems: 'center',
        flex: 1,
    },
    coffee: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        width: 60,
        height: 90,
    },
    search: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        marginTop: 8,
        width: 40,
        height: 40,
    },
    title: {
        alignItems: 'center',
        color: basicColor.text,
        fontSize: 50,
        fontWeight: '700',
    },
    text: {
        alignItems:'center',
        paddingTop: 50,
        color: basicColor.text,
        fontSize: 20,
        fontWeight: '700',
    },
    searchBar: {
        flex: 1,
        color: basicColor.text,
        fontSize: 18,
        width:'100%',
        padding: 10,
        fontWeight:'700',
    },
    result: {
        color: basicColor.text,
        fontSize: 18,
        fontWeight:'700',
    },
})

export default Search;