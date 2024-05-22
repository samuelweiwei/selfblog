export default function Signup(){
    return (
      <form onSubmit={(e) => {
            e.preventDefault();
            alert('Submitting!'
        )}}>
        Username:{" "}<input name="Username"></input>
        <button>Send</button>
      </form>
    );
}