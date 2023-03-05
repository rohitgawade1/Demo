import './App.css';
import Card from './components/Card/Card';

function App() {
  const data = [
    {
      img_link: "https://dfzcprod.azureedge.net/-/media/project/dfbg/corporate/global/freezones/dwtc/location.jpg?rev=c447eecb82ec40b5a2e5c39951c5d50e",
      name: 'DWTC'
    },
    {
      img_link: "https://media.istockphoto.com/id/1284066336/photo/modern-gadgets-in-interior-of-coworking-office-during-covid-19-epidemic.jpg?s=612x612&w=0&k=20&c=Rl3eAbIDD7aCe63ibkA7Ng_-VJV-Npuc9Ey_eIE24U8=",
      name: 'Office'
    },
    {
      img_link: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
      name: 'Restaurant '
    },
    {
      img_link: "https://media.istockphoto.com/id/1335215488/photo/nail-and-pedicure-saloon-modern-with-nail-polish-colorful-in-a-row.jpg?s=612x612&w=0&k=20&c=F7ifLREfnXCpX2oXuIgWrzmgSSHmKQlTnrUVerpVJO0=",
      name: 'Nail-Paint Bar'
    },
    {
      img_link: "https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs=",
      name: 'Villa'
    },
    {
      img_link: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      name: 'GYM'
    }
    
  ]
  return (
    <div className="App">
      <h1 className='heading'>Our Projects</h1>
      <div className="app">
        {data.map((each) => {
          return <Card data={each}/>
        })}
      </div>
    </div>
  );
}

export default App;
