import { API } from "../../constants/api";
import axios from "axios";

import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";
import Heading from "../../components/typography/Heading";

import heroImg from "../../public/images/cover/bergen_brygge_banner_1920.jpg";
import TopCover from "../../components/blocks/TopCover";
import Message from "../../components/admin/Message";

export default function dashboard(props) {
  const requests = props.requests;

  console.log(requests);
  return (
    <Layout page="dashboard">
      <Head />

      <TopCover img={heroImg.src} size="small">
        <Heading text="Dashboard" size={1} />
      </TopCover>
      <section className="dashboard__wrapper">
        <Heading text="Messages" size={2} />
        <div className="dashboard__messages">
          <section className="dashboard__admin-messages">
            <Heading text="Contact messages" size={3} />
            <Message created="000000" content={{ title: "test", id: 0 }}>
              <div className="message__excerpt">
                This section is under construction
              </div>
            </Message>
          </section>
          <section className="dashboard__hotel-requests">
            <Heading text="Hotel requests" size={3} />
            {requests.map((request) => {
              return (
                <Message key={request.id} content={request}>
                  <table>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <th>Regarding</th>
                        <th>Time period</th>
                      </tr>
                      <tr>
                        <td className="message__name">{request.name}</td>
                        <td className="message__room">{request.roomName}</td>
                        <td className="message__stay-dates">
                          {request.checkIn} -
                          <br />
                          {request.checkOut}
                        </td>
                      </tr>
                      <tr>
                        <th>Adults</th>
                        <th>Children</th>
                      </tr>
                      <tr>
                        <td className="message__adults">
                          {request.guests.adults}
                        </td>
                        <td className="message__children">
                          {request.guests.children}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Message>
              );
            })}
          </section>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const requestsUrl = API.API_URL + API.REQUESTS_ENDPOINT;

  let data = [];
  let requests = [];

  try {
    const response = await axios.get(requestsUrl);
    data = response.data;
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const adults = data[i].acf.request_adults.match(/\d+/)[0];
      const children = data[i].acf.request_children.match(/\d+/)[0];
      const guests = {
        adults: adults,
        children: children,
      };

      requests.push({
        id: data[i].id,
        created: data[i].date,
        title: data[i].title.rendered,
        name: data[i].acf.request_name,
        email: data[i].acf.request_email,
        checkIn: data[i].acf.request_check_in,
        checkOut: data[i].acf.request_check_out,
        roomName: data[i].acf.request_room_name,
        guests: guests,
        message: data[i].acf.request_message,
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    // finally
  }
  return {
    props: {
      requests: requests,
    },
  };
}