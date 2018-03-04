import React from 'react';
import ReactPaginate from 'react-paginate';
export default class Pagination extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
            data: [],
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    handlePageClick(data){
        let val=data.selected;
        this.props.value={val};
    }
    render(){
        return(
<ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.props.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                
                />
        );
    }
}