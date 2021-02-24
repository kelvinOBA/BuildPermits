import React from "react";
import { connect } from "react-redux";
import { getBuildingPermits } from "../store/actions/getPermits";

class BuildingPerm extends React.Component {
  componentDidMount() {
    this.props.getPermitromStore();
  }

  state = {
    permitObject: {},
    viewObject:false
  };

  savePermit(data) {
    this.setState({
      permitObject: data,
      viewObject:true
    });
  }

  closePermit(){

    this.setState({
        viewObject:false
      });
  }

  render() {
    return (
      <div className="build-cover">
        {this.props.loaderFromStore ? <p>Loading ............</p> : null}


        {this.state.viewObject ?     <div>
          <div className="build-perm-info">
        <p>{this.state.permitObject.permit_type}</p>
        <p>{this.state.permitObject.work_description}</p>
        <p>{this.state.permitObject.contact_1_type}</p>
        <p>{this.state.permitObject.contact_1_name}</p>
           
            <button onClick={() => this.closePermit()}>Close</button>
          </div>
        </div> : <div>

{this.props.permitsFromStore.map((permit) => {
  return (
    <div className="build-perm" key={permit.id + permit.permit_type}>
      <p>{permit.permit_type}</p>
  <p>Issued: {permit.issue_date}</p>
      <button onClick={() => this.savePermit(permit)}>View more</button>
    </div>
  );
})}
</div>}


   
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPermitromStore: () => dispatch(getBuildingPermits()),
  };
};

const mapStateToProps = (state) => {
  return {
    loaderFromStore: state.loader,
    permitsFromStore: state.permits,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuildingPerm);
