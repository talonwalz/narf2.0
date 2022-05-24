import React from 'react';

function FeaturesTable() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 md:pt-20">

          {/* Section header */}
          <div className="pb-4 md:pb-8">
            <h2 className="h2 text-center">What We Treat</h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="hidden md:table table-fixed w-full border-b border-gray-200">
              {/* Table header */}
              {/* <thead>
                <tr className="text-base sm:text-lg border-t border-gray-200">
                  <th className="text-bold text-left pr-2 py-4 min-w-48">Sports</th>
                  <th className="text-bold text-center px-2 py-4">Starter</th>
                  <th className="text-bold text-center px-2 py-4">Premium</th>
                  <th className="text-bold text-center px-2 py-4">Agency</th>
                  <th className="text-bold text-center pl-2 py-4">Enterprise</th>
                </tr>
              </thead> */}
              {/* Table body */}
              <tbody>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="text-center text-sm px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Sciatica and Back Pain</div>
                    <div className="text-gray-600">Physical discomfort occurring anywhere on the spine or back, ranging from mild to disabling or pain that radiates along the path of the sciatic nerve.</div>
                  </td>
                  <td className="text-center text-sm px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Neck Pain</div>
                    <div className="text-gray-600">Gait disorders can cause abnormal movements impacting the way you walk and run, and these can become exacerbated with age.</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl  text-teal-50">Shoulder Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl  text-teal-50">Hip and Knee Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl  text-teal-50">Elbow, Wrist, and Hand Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Foot and Ankle Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Dizziness and Balance Impairments</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Balance and Gait Disorders</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Arthritis</div>
                    <div className="text-gray-600">Joint inflammation, causing pain and stiffness that can worsen with age. Different types of arthritis exist, each with different causes.</div>
                  </td>
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Chronic Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Fibromyalgia</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Sports Injury</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">Work Injury</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                  <td className="text-sm text-center px-8 py-4">
                    <div className="font-medium text-xl text-teal-50">General Weakness</div>
                    <div className="text-gray-600">A person experiencing weakness may not be able to move a certain part of their body properly which can quickly result in more serious injuries.</div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Mobile */}
            <table className="md:hidden table-auto w-full border-b border-gray-200">
            
              {/* Table body */}
              <tbody>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="text-center text-sm pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Sciatica and Back Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-center text-sm pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Neck Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl  text-teal-50">Shoulder Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl  text-teal-50">Hip and Knee Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl  text-teal-50">Elbow, Wrist, and Hand Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Foot and Ankle Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Dizziness and Balance Impairments</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Balance and Gait Disorders</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Arthritis Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Chronic Pain</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Fibromyalgia</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Sports Injury</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">Work Injury</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="text-sm text-center pr-2 py-4">
                    <div className="font-medium text-xl text-teal-50">General Weakness</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesTable;