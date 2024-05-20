import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className=" relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">

                <div className="flex flex-col mt-2 text-center font-bold w-96">
                  <Typography variant="h1" color="blue-gray">
                    Facilities
                  </Typography>

                </div>
              </div>

              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                {/* <Button className="bg-gray-900 w-fit lg:ml-auto"></Button> */}
                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      557
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Classrooms
                    </Typography>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      50
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      LABs
                    </Typography>
                  </div>
                  <div className="p-3 text-center lg:mr-4">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      2000
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Students
                    </Typography>
                  </div>
                </div>

              </div>
            </div>
            <div className="ml-[10vw] container w-[50vw] space-y-2 ">
              <p>At NIST, we are dedicated to providing
                students with a conducive learning environment equipped
                with state-of-the-art facilities to support their academic
                pursuits and personal development. Our campus offers a wide
                range of amenities and resources designed to enhance the overall
                college experience. Here's a glimpse of the facilities available:
              </p><br />

              <div className="m-4 p-4 rounded-2xl border-4 border-red-500">
                <h3 className="font-bold text-red-500">Academic Facilities</h3><br />

                <ul>
                  <li>Modern Classrooms: Spacious and well-equipped classrooms furnished with the latest technology to facilitate interactive learning and collaboration.</li><br />
                  <li>Laboratories: Specialized laboratories equipped with advanced equipment and software to support hands-on experimentation and research across various disciplines, including science, engineering, and technology.</li><br />
                  <li>Library: A vast repository of knowledge comprising an extensive collection of books, journals, e-books, and online databases to aid in academic research and self-study. Our library provides a tranquil space for studying and accessing information resources.</li><br />
                </ul>
              </div>
              <br />

              <div className="m-4 p-4 rounded-2xl border-4 border-yellow-500">
                <h3 className="font-bold text-yellow-600">Recreational Facilities</h3><br />
                <ul>
                  <li>Sports Complex: A sprawling sports complex featuring indoor and outdoor facilities for various sports and recreational activities. Students can engage in activities such as basketball, volleyball, badminton, and more, promoting physical fitness and teamwork.</li><br />
                  <li>Gymnasium: A well-equipped gymnasium equipped with modern fitness equipment and trained instructors to support students' health and wellness goals.</li><br />
                  <li>Student Lounge Areas: Comfortable and inviting lounge areas scattered throughout the campus where students can relax, socialize, and unwind between classes.</li><br />
                </ul>
              </div>
            </div>
            <br />

            <div className="ml-[10vw] container w-[80vw] space-y-2">
              <div className="m-4 p-4 rounded-2xl border-4 border-green-500">
                <h3 className="font-bold text-green-500">Residential Facilities</h3><br />
                <ul>
                  <li>On-Campus Housing: Comfortable and secure residential accommodation options for students, including dormitories and apartments, fostering a sense of community and camaraderie among residents.</li><br />

                  <li>Dining Halls and Cafeteria: Spacious dining halls and cafeteria serving nutritious and delicious meals, catering to diverse dietary preferences and requirements.</li><br />

                  <li>Laundry Facilities: Convenient on-campus laundry facilities equipped with washing machines and dryers to meet students' laundry needs.</li><br />
                </ul>
              </div>
              <br />

              <div className="m-4 p-4 rounded-2xl border-4 border-blue-500">
                <h3 className="font-bold text-blue-500">Additional Facilities</h3><br />
                <ul>
                  <li>Health Center: A dedicated health center staffed with medical professionals to provide primary healthcare services, counseling, and wellness programs to students and staff.</li><br />

                  <li>Transportation Services: Convenient transportation services connecting the campus to key locations in the city, facilitating easy commute for students and staff.</li><br />

                  <li>Wi-Fi Connectivity: Seamless Wi-Fi connectivity available across the campus, enabling students to stay connected and access online resources anytime, anywhere.</li><br />
                </ul>
              </div>
              <br />

              <div className="m-4 p-4 rounded-2xl border-4 border-purple-500">
                <h3 className="font-bold text-purple-500">Sustainability Initiatives</h3><br />
                <ul>
                  <li>Green Spaces: Lush greenery and landscaped gardens dotted throughout the campus, creating a serene and eco-friendly atmosphere conducive to learning and relaxation.</li><br />

                  <li>Energy-Efficient Buildings: Energy-efficient buildings equipped with solar panels, LED lighting, and other sustainable features to minimize environmental impact and promote energy conservation.</li><br />

                  <li>Waste Management: Robust waste management systems in place to promote recycling, reduce waste generation, and maintain a clean and healthy environment for all members of the college community.</li><br />
                </ul>
              </div>
              <br /><br />
              <p className="w-[60vw]"> At NIST, we are committed to providing students with a holistic college experience that encompasses academic excellence, personal growth, and well-being. Our comprehensive range of facilities reflects this commitment and serves as a testament to our dedication to student success and satisfaction.</p>

            </div>
            <div className="mb-10 py-6">
              <div className="flex w-full flex-col items-start lg:w-1/2">
                {/* <Button variant="text">Show more</Button> */}
              </div>
            </div>
          </div>
        </div>


      </section>
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
