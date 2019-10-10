import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listEntries } from '../store/actions/entry';
import DateLabel from '../components/DateLabel';
import EntryListing from '../components/EntryListing';
import AddButton from '../components/AddButton';

export class HomeView extends Component {
  componentDidMount() {
    const { listEntries } = this.props;
    listEntries();
  }
  render() {
    const { entries } = this.props;

    return (
      <>
        <DateLabel />
        <EntryListing data={entries.data.entry} />
        <AddButton />
      </>
    );
  }
}
export const mapStateToProps = state => ({
  entries: state.listEntries
});

export const mapDispatchToProps = { listEntries };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
