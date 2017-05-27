import React,{Component} from 'react';

class TableHeader extends Component{
		 render(){

		 const obj=this.props.headerdata;
		 let headers =[];
			  for(let i in obj){
			  		headers.push(i);
			  }
	let headersArray= headers.splice(0,5);		  
		  console.log("TableHeader Data :",headers);
		  let header =  headersArray.map((head,index)=>
		  	<th key={index}>{head.toUpperCase()}</th>

		  );
		 	return(
		 <thead>
		 	<tr >
		 		{header}
		 		<th >SELECT</th>
		 	</tr>
		 </thead>
		 	);
		 }
	}
    export default TableHeader;