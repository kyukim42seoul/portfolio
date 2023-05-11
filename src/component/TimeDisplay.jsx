const TimeDisplay = ({ seconds }) => {
	const formatTime = (time) => {
	  const hrs = Math.floor(time / 3600);
	  const mins = Math.floor((time % 3600) / 60);
	  const secs = Math.floor(time % 60);
	  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
	};
  
	return <div>{formatTime(seconds)}</div>;
  };

export default TimeDisplay