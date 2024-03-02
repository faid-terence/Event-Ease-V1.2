import React, { useState } from "react";
import ticket1 from "../../assets/images/ticket1.jpg";
import ticket2 from "../../assets/images/ticket2.png";
import ticket3 from "../../assets/images/ticket3.jpg";
import ticket4 from "../../assets/images/ticket-04.png";
import ticket5 from "../../assets/images/ticket5.png";

const MyTicketsPage = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleTicketDetails = (ticketId) => {
    const selected = tickets.find((ticket) => ticket.id === ticketId);
    setSelectedTicket(selected);
  };

  const handleDownloadTicket = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = selectedTicket?.ticketImage;
    downloadLink.download = `${selectedTicket?.eventName}_Ticket.png`;
    downloadLink.click();
  };

  const tickets = [
    {
      id: 1,
      eventName: "Cinema Night",
      date: "2024-03-15",
      venue: "City Arena",
      ticketCode: "ABC123",
      ticketImage: ticket1,
      details: "An amazing cinema night experience.",
    },
    {
      id: 2,
      eventName: "Tech Conference",
      date: "2024-04-20",
      venue: "Convention Center",
      ticketCode: "XYZ789",
      ticketImage: ticket3,
      details: "Explore the latest trends in technology and innovation.",
    },
    {
      id: 3,
      eventName: "Basketball Exhibition",
      date: "2024-05-10",
      venue: "Gallery Hall",
      ticketCode: "DEF456",
      ticketImage: ticket2,
      details: "Enjoy an exciting basketball exhibition.",
    },
    {
      id: 4,
      eventName: "Fitness Expo",
      date: "2024-06-22",
      venue: "Fitness Center",
      ticketCode: "GHI789",
      ticketImage: ticket4,
      details: "Discover the latest in fitness and wellness.",
    },
    {
      id: 5,
      eventName: "Food Festival",
      date: "2024-07-15",
      venue: "Culinary Square",
      ticketCode: "JKL012",
      ticketImage: ticket5,
      details: "A delightful festival featuring diverse cuisines.",
    },
  ];

  return (
    <section>
      <div className="container mx-auto mt-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">My Tickets</h2>

        {tickets.length === 0 ? (
          <p className="text-gray-600">
            You haven't purchased any tickets yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <img
                    className="w-full h-32 object-cover mb-4 rounded-md"
                    src={ticket.ticketImage}
                    alt={ticket.eventName}
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {ticket.eventName}
                  </h3>
                  <p className="text-gray-500 mb-2">
                    {ticket.date} - {ticket.venue}
                  </p>
                  <p className="text-gray-700 mb-4">
                    Ticket Code: {ticket.ticketCode}
                  </p>
                </div>
                <button
                  className="btn text-white px-4 py-2 rounded-ful focus:outline-none focus:shadow-outline-blue"
                  onClick={() => handleTicketDetails(ticket.id)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedTicket && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md text-center">
            <img
              className="w-full h-64 object-cover mb-4 rounded-md"
              src={selectedTicket.ticketImage}
              alt={selectedTicket.eventName}
            />
            <button
              className="btn text-white px-4 py-2 rounded-full focus:outline-none focus:shadow-outline-blue"
              onClick={handleDownloadTicket}
            >
              Download Ticket
            </button>
            <button
              className="btn text-white bg-gray-500 px-4 py-2 rounded-full hover:bg-gray-600 ml-2"
              onClick={() => setSelectedTicket(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyTicketsPage;

// import React, { useState } from "react";
// import html2pdf from "html2pdf.js";
// import ticket1 from "../../assets/images/ticket1.jpg";
// import ticket2 from "../../assets/images/ticket2.png";
// import ticket3 from "../../assets/images/ticket3.jpg";
// import ticket4 from "../../assets/images/ticket-04.png";
// import ticket5 from "../../assets/images/ticket5.png";

// const MyTicketsPage = () => {
//   const [selectedTicket, setSelectedTicket] = useState(null);

//   const handleTicketDetails = (ticketId) => {
//     const selected = tickets.find((ticket) => ticket.id === ticketId);
//     setSelectedTicket(selected);
//   };

//   const handleDownloadTicket = () => {
//     if (!selectedTicket) return;

//     // Create a div element to render the image
//     const imgContainer = document.createElement("div");
//     const imgElement = document.createElement("img");
//     imgElement.src = selectedTicket.ticketImage;
//     imgElement.alt = selectedTicket.eventName;
//     imgElement.style.width = "100%";

//     // Append the image element to the container
//     imgContainer.appendChild(imgElement);

//     // Use html2pdf to generate a PDF from the image container
//     html2pdf().from(imgContainer).outputPdf().then((pdf) => {
//       // Create a download link for the PDF
//       const downloadLink = document.createElement("a");
//       const blob = new Blob([pdf], { type: "application/pdf" });
//       const url = URL.createObjectURL(blob);
//       downloadLink.href = url;
//       downloadLink.download = `${selectedTicket.eventName}_Ticket.pdf`;
//       downloadLink.click();

//       // Cleanup
//       URL.revokeObjectURL(url);
//     });
//   };

//   // Sample ticket data
//   const tickets = [
//     {
//       id: 1,
//       eventName: "Cinema Night",
//       date: "2024-03-15",
//       venue: "City Arena",
//       ticketCode: "ABC123",
//       ticketImage: ticket1,
//       details: "An amazing cinema night experience.",
//     },
//     {
//       id: 2,
//       eventName: "Tech Conference",
//       date: "2024-04-20",
//       venue: "Convention Center",
//       ticketCode: "XYZ789",
//       ticketImage: ticket3,
//       details: "Explore the latest trends in technology and innovation.",
//     },
//     {
//       id: 3,
//       eventName: "Basketball Exhibition",
//       date: "2024-05-10",
//       venue: "Gallery Hall",
//       ticketCode: "DEF456",
//       ticketImage: ticket2,
//       details: "Enjoy an exciting basketball exhibition.",
//     },
//     {
//       id: 4,
//       eventName: "Fitness Expo",
//       date: "2024-06-22",
//       venue: "Fitness Center",
//       ticketCode: "GHI789",
//       ticketImage: ticket4,
//       details: "Discover the latest in fitness and wellness.",
//     },
//     {
//       id: 5,
//       eventName: "Food Festival",
//       date: "2024-07-15",
//       venue: "Culinary Square",
//       ticketCode: "JKL012",
//       ticketImage: ticket5,
//       details: "A delightful festival featuring diverse cuisines.",
//     },
//   ];

//   return (
//     <section>
//       <div className="container mx-auto mt-8 flex flex-col items-center">
//         <h2 className="text-3xl font-bold mb-6">My Tickets</h2>

//         {tickets.length === 0 ? (
//           <p className="text-gray-600">
//             You haven't purchased any tickets yet.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {tickets.map((ticket) => (
//               <div
//                 key={ticket.id}
//                 className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
//               >
//                 <div>
//                   <img
//                     className="w-full h-32 object-cover mb-4 rounded-md"
//                     src={ticket.ticketImage}
//                     alt={ticket.eventName}
//                   />
//                   <h3 className="text-xl font-semibold mb-2">
//                     {ticket.eventName}
//                   </h3>
//                   <p className="text-gray-500 mb-2">
//                     {ticket.date} - {ticket.venue}
//                   </p>
//                   <p className="text-gray-700 mb-4">
//                     Ticket Code: {ticket.ticketCode}
//                   </p>
//                 </div>
//                 <button
//                   className="btn text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
//                   onClick={() => handleTicketDetails(ticket.id)}
//                 >
//                   View Details
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Details Modal */}
//       {selectedTicket && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-md text-center">
//             <img
//               className="w-full h-64 object-cover mb-4 rounded-md"
//               src={selectedTicket.ticketImage}
//               alt={selectedTicket.eventName}
//             />
//             <button
//               className="btn text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
//               onClick={handleDownloadTicket}
//             >
//               Download Ticket (PDF)
//             </button>
//             <button
//               className="btn text-white bg-gray-500 px-4 py-2 rounded-full hover:bg-gray-600 ml-2"
//               onClick={() => setSelectedTicket(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default MyTicketsPage;
