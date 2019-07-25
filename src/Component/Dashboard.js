import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get_new_leads, get_the_data_changes } from '../store/actions/databaseAction';

export class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            newLeads : [],
            qualifiedLeads : [],
            contactLeads : [],
            dragStartData:{}
        }
    }

    componentDidMount(){
        this.props.get_new_leads();
    }

    onDragStartHandler = ( data, index ) => (e) => {
        // console.log("Drag Start", data, index );
        this.setState({
            dragStartData : data
        })
    }
    onDropHandler =  value => e => {
        e.preventDefault()
        console.log( this.state.dragStartData, value );
        let newFormData = {
            state : value
        }
        this.props.get_the_data_changes( newFormData , this.state.dragStartData.id );
        // console.log("Drop Hanlder",e.dataTransfer, value );
    }
    onDragOverHandler =  e => {
        e.preventDefault();
        // console.log("DragOver",e );
    }

    static getDerivedStateFromProps ( nextProps, nextState ){
        console.log( nextProps.database.newLeads );
        if( Object.keys( nextProps.database.newLeads ).length !== 0  && nextProps.database.newLeads !== nextState.newLeads){
            return {
                newLeads : nextProps.database.newLeads
            }
        }
        if( Object.keys( nextProps.database.qualifiedLeads ).length !== 0  && nextProps.database.qualifiedLeads !== nextState.qualifiedLeads){
            return {
                qualifiedLeads : nextProps.database.qualifiedLeads
            }
        }
        if( Object.keys( nextProps.database.contactedLeads ).length !== 0  && nextProps.database.contactedLeads !== nextState.contactLeads){
            return {
                contactLeads : nextProps.database.contactedLeads
            }
        }
        return null
    }

    renderNewLeads = () => {
        let list = this.state.newLeads.map( ( data, index ) => ( 
            <div key={index} className='card m-5' draggable="true"  onDragStart={ this.onDragStartHandler( data, index )}>
                <div className='card-body'>
                    <div className='card-title'>{ data.fname } { data.lname }</div>
                </div>
            </div> 
            ) );
        return list;
    }
    renderContactedLeads = () => {
        let list = this.state.contactLeads.map( ( data, index ) => ( 
            <div key={index} className='card m-5' draggable="true" onDragStart={ this.onDragStartHandler( data, index ) } >
                <div className='card-body'>
                    <div className='card-title'>{ data.fname } { data.lname }</div>
                </div>
            </div> 
            ) );
        return list;
    }

renderQualifiedLeadas = () => {
        let list = this.state.qualifiedLeads.map( ( data, index ) => ( 
            <div key={index} className='card  m-5' draggable="true" onDragStart={ this.onDragStartHandler( data, index )}>
                <div className='card-body'>
                    <div className='card-title'>{ data.fname } { data.lname }</div>
                </div>
            </div> 
            ) );
        return list;
    }

    render() {
        return (
            <div className='mainConainer'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='heads'>New Leads</div>
                        <div className='new_leads_container'  onDrop={ this.onDropHandler("New Leads") } onDragOver={ this.onDragOverHandler }>
                              { this.renderNewLeads() }
                        </div>  
                    </div>
                    <div className='col-sm-4'>
                        <div className='heads'>Qualified Leads</div>
                        <div className='qualified_leads_container'   onDrop={ this.onDropHandler("Qualified") } onDragOver={ this.onDragOverHandler }>
                            { this.renderQualifiedLeadas() }
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='heads'>Contacted Leads</div>
                        <div className='contacted_leads_container'  onDrop={  this.onDropHandler("Contacted") } onDragOver={ this.onDragOverHandler }>
                            { this.renderContactedLeads() }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateFromProps = state => ({
    errors : state.errors,
    database : state.database
});

export default connect( mapStateFromProps, { get_new_leads, get_the_data_changes  } )(withRouter(Dashboard));
