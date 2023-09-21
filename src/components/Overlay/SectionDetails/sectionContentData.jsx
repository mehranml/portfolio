// Components
import TeamCarousel from "../TeamCarousel";
import axios from "axios";

// Sections content data
const sectionsContentData = [

  { key: "team", title: "Our team", content:
          <div>
              its place for team

          </div> },
  {
    key: "credits",
    title: "Contact us",
    content: (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                axios.post('https://api.telegram.org/bot6340386698:AAGiK5uWh1PiNoWKQsbYNlsApf8l5R9xT7A/sendMessage', {
                    text: JSON.stringify({
                        name:e.target[0].value,
                        email:e.target[1].value,
                        message:e.target[2].value,
                    }),
                    chat_id: '78667714'
                });
            }}
            style={{display: 'flex', flexDirection: 'column', width: '300px'}}
        >
            <input
                type="text"
                placeholder="Name"
                style={{marginBottom: '10px', padding: '5px'}}
            />

            <input
                type="email"
                placeholder="Email"
                style={{marginBottom: '10px', padding: '5px'}}
            />

            <textarea
                placeholder="Message"
                style={{marginBottom: '10px', padding: '5px'}}
            />

            <button type="submit" style={{padding: '5px', width: '100px'}}>
                Submit
            </button>
        </form>
    ),
  },
];

export default sectionsContentData;
