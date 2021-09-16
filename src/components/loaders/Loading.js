export default function Loading({ message }) {
  return (
    <div className="loading-container">
      <h2 className="loading-header">{message}</h2>
      <iframe
        className="loading-gif"
        title="loading gif"
        src="https://giphy.com/embed/xTkcEQACH24SMPxIQg"
      ></iframe>
    </div>
  );
}
