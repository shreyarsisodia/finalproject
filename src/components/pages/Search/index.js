import './index.css';
import SideNavbar from '../../organisms/SideNavbar';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
const Search=()=>
{
  return(<>
  <SideNavbar/>
  <div className="searchbox">
<h1><span class="material-icons speaker">
keyboard_voice
</span>Podcast Platform</h1>
    <div class="input-group mb-3 w-50 mx-auto ">
   <InputGroup className="mb-3">
    <FormControl
      placeholder="Discover new Podcasts"
      aria-label="Discover new Podcasts"
      aria-describedby="basic-addon2"
    />
     <InputGroup.Append>
      <Button variant="outline-secondary">Search Podcasts</Button>
    </InputGroup.Append>
     </InputGroup>
</div>
</div>
</>);
}
export default Search;