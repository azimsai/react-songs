import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) return <div>Please Select a song.</div>;
  return (
    <div>
      <h3>Selected song</h3>
      <p>
        <b>Song: </b> {song.title}
        <br />
        <b>Duration: </b> {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
