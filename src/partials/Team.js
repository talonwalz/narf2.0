import React from 'react';

function Team() {
  return (
    <section id="team" className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200 pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">The humans behind the exceptional care</h2>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 " data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/tarrin.jpg').default} width="150" height="150" alt="Tarrin Walz" />
                <h4 className="text-xl font-bold mb-1">Tarrin Walz, PT, MS</h4>
                <div className="text-teal-50 font-medium mb-2">Physical Therapist and Owner</div>
                <p className="text-gray-600 text-center mb-3">Tarrin graduated from Utah State University in Logan, UT in 1994 with a B.S. in Exercise Science and again in 1997 with an M.S. in Exercise Physiology with an emphasis in Cardiac Rehabilitation. He then received his M.S. in Physical Therapy from Regis University in Denver, CO in 1999. Shortly after moving his family to Cottonwood in 2000, along with business partner Philip A. Sauer, RPT, opened Northern Arizona Rehabilitation & Fitness, PC (NARF). Tarrin is a member of the American Physical Therapy Association and the National Strength and Conditioning Association.</p>
                <p className="text-gray-600 text-center mb-3">Tarrin has experience working in sports medicine, orthopedics, athletic training and aquatic rehabilitation. He is a proud supporter of Mingus Union H.S. athletics and is involved with numerous sports programs. He enjoys spending time with his kids, playing sports, and remains active in numerous community activities.</p>
                <details><summary className='="text-gray-600 text-center mb-3"'>Full Bio</summary><p className="text-gray-600 text-left mb-3">Tarrin has experience working in sports medicine, orthopedics, athletic training and aquatic rehabilitation. He is a proud supporter of Mingus Union H.S. athletics and is involved with numerous sports programs. He enjoys spending time with his kids, playing sports, and remains active in numerous community activities.</p></details>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/dan.jpg').default} width="150" height="150" alt="Dan Sorensen" />
                <h4 className="text-xl font-bold mb-1">Dan Sorensen, PT, MPT</h4>
                <div className="text-teal-50 font-medium mb-2">Physical Therapist</div>
                <p className="text-gray-600 text-center mb-3">Dan graduated with his Master's degree in physical therapy in 2003 and has been working at Northern Arizona Rehabilitation & Fitness since then. Dan is an Arizona native who grew up in the Phoenix area. He went to school in Utah and Texas, but came back to Arizona to enjoy the great weather and be close to family. He is happily married to a beautiful wife and has five children who keep him entertained and busy. Some of his hobbies and interests are exercising, reading, hunting, Formula 1 racing, and spending time with his family. He has taken multiple courses in treatment for sports injuries, osteoarthritis, and strength/conditioning.</p>
                <details><summary className='="text-gray-600 text-center mb-3"'>Full Bio</summary><p className="text-gray-600 text-left mb-3">Tarrin has experience working in sports medicine, orthopedics, athletic training and aquatic rehabilitation. He is a proud supporter of Mingus Union H.S. athletics and is involved with numerous sports programs. He enjoys spending time with his kids, playing sports, and remains active in numerous community activities.</p></details>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/dawn.jpg').default} width="150" height="150" alt="Dawn Rossi" />
                <h4 className="text-xl font-bold mb-1">Dawn Rossi, PTA</h4>
                <div className="text-teal-50 font-medium mb-2">Physical Therapist Assistant</div>
                <p className="text-gray-600 text-center mb-3">Dawn is from Anchorage Alaska. She graduated from NAU in 1992 with degree in Psychology and received her Physical Therapist Assistant training at Green River Community College in 2000. Dawn has been a PTA for 18 years working in many different settings, including in-patient, out-patient, acute care, skilled nursing and home health. Outpatient PT is her favorite setting. She specializes in aquatic training and myofascial release techniques (MFR). She decided to leave the travelling therapist world and joined team NARF in 2018 and has been helping people get their lives back ever since.</p>
                <details><summary className='="text-gray-600 text-center mb-3"'>Full Bio</summary><p className="text-gray-600 text-left mb-3">Tarrin has experience working in sports medicine, orthopedics, athletic training and aquatic rehabilitation. He is a proud supporter of Mingus Union H.S. athletics and is involved with numerous sports programs. He enjoys spending time with his kids, playing sports, and remains active in numerous community activities.</p></details>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 4th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/talon.jpg').default} width="120" height="120" alt="Team member 04" />
                <h4 className="text-xl font-bold mb-1">Talon Walz</h4>
                <div className="text-teal-50 font-medium mb-2">Software Engineer</div>
                <p className="text-gray-600 text-center mb-3">Born and raised in Sedona, AZ and is now happily married and lives in Saratoga Springs, UT. Enjoys getting outside and being active.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

            {/* 5th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-05.jpg').default} width="120" height="120" alt="Team member 05" />
                <h4 className="text-xl font-bold mb-1">Jessie Pietrasiak</h4>
                <div className="text-teal-50 font-medium mb-2">Head of Design</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

            {/* 6th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-06.jpg').default} width="120" height="120" alt="Team member 06" />
                <h4 className="text-xl font-bold mb-1">Quin Lopez</h4>
                <div className="text-teal-50 font-medium mb-2">Front-end Engineer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

            {/* 7th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="900" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-07.jpg').default} width="120" height="120" alt="Team member 07" />
                <h4 className="text-xl font-bold mb-1">Tamara Hastings</h4>
                <div className="text-blue-600 font-medium mb-2">Product Developer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

            {/* 8th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1050" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-08.jpg').default} width="120" height="120" alt="Team member 08" />
                <h4 className="text-xl font-bold mb-1">Rachel Vervack</h4>
                <div className="text-blue-600 font-medium mb-2">Senior Data Scientist</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

            {/* 9th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-09.jpg').default} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl font-bold mb-1">Andrew Laurencio</h4>
                <div className="text-blue-600 font-medium mb-2">Front-end Engineer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;