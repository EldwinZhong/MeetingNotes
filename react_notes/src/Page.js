import React from 'react';
import FileUpload from './components/FileUpload';
import NoteBox from './components/NoteBox';

class Page extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {list: []}
    }

    //This method makes the API call to retrieve the data from the server using RESTful API
    fetchData = () => {
        console.log("fetching")
        //With Flask CORS enabled, we can directly call the server on port 5000
        fetch('http://localhost:5000/Notes')
         .then( 
             (response) => 
             {
                return response.json() ;
             }
             )//The promise response is returned, then we extract the json data
         .then (jsonOutput => //jsonOutput now has result of the data extraction
                {
                    this.updateData(jsonOutput);
                }
              )
         .catch((error => console.log("**Fetch exception:" + error)))
    }

    /*When the component is loaded, this will call the fetchData method to retrieve the data
    componentDidMount(){
        this.fetchData();
    } */

    updateData=(data)=>
    {
        this.setState({list: data});
        
    }


    render(){
        console.log("State:",this.state.list);
        return (
            <div className='content-container'>
                <NoteBox/>
                <FileUpload/>
            </div>
        );
    }
}

export default Page;