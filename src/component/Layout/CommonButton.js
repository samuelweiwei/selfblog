import { Button } from "@mui/material";

function CommonButton({ onClick, children }) {
    return (
      <Button variant="contained" onClick={e=>{
            e.stopPropagation();
            onClick();
        }}>
        {children}
      </Button>
    );
  }
  
  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <CommonButton onClick={handlePlayClick}>
        Play "{movieName}"
      </CommonButton>
    );
  }
  
  function UploadButton() {
    return (
      <CommonButton onClick={() => alert('Uploading!')}>
        Upload Image
      </CommonButton>
    );
  }
  
//   export default function Toolbar() {
//     return (
//       <div>
//         <PlayButton movieName="Kiki's Delivery Service" /><br/>
//         <UploadButton />
//       </div>
//     );
//   }
export default function Toolbar() {
    return (
      <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!') ;
      }} onClickCapture={()=>alert(100)}>
        <PlayButton onClick={() => alert('Playing!')} movieName="End of the world">
          Play Movie
        </PlayButton>
        {"  "}
        <UploadButton onClick={() => alert('Uploading!')}>
          Upload Image
        </UploadButton>
      </div>
    );
  }
  