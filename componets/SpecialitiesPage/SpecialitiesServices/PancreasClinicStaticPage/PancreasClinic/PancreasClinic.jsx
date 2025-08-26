import Image from "next/image";
import React from "react";

const PancreasClinic = () => {
  const scopeItems = [
    { title: "Evaluation of Pancreatic masses" },
    {
      title: "Pancreatic cysts",
      subItems: [
        "Pseudocysts",
        "Intraductal papillary mucinous neoplasms (IPMN)",
        "Other cystic lesions of the pancreas",
      ],
    },
    { title: "Neuroendocrine tumours" },
    {
      title: "Acute pancreatitis",
      subItems: ["Walled-off pancreatic necrosis", "Biliary pancreatitis"],
    },
    {
      title:
        "Chronic pancreatitis and sequelae including Exocrine pancreatic insufficiency, pancreatic diabetes, etc",
    },
    { title: "High-risk pancreas cancer screening" },
    { title: "Autoimmune Pancreatitis" },
    { title: "Ampullary masses and Bile duct abnormalities" },
  ];
  return (
    <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px] bg-[radial-gradient(247.77%_202.26%_at_46.45%_-32.32%,_#FFF_33.84%,_#EEF9FF_97.64%)] shadow-[3.987px_11.962px_27.911px_rgba(0,0,0,0.06)] rounded-[40px] p-6">
      <div>
        <h2 className="text-[#3D3D3D] min-[1200px]:text-[40px] min-[800px]:text-[30px] text-[20px] font-bold">
          Pancreas clinic – A multidisciplinary approach to management of
          pancreatic disorders:
        </h2>
        <p className="text-[#414049] min-[1200px]:text-[16px] text-[800px]:text-[14px] text-[13px] font-medium min-[1200px]:mt-[24px] mt-[16px]">
          A specialized clinic for multidisciplinary care of patients with
          pancreatic disorders has been set up at Ramaiah Memorial Hospital.
          This clinic will offer extensive, specialized expertise in diagnosing
          and treating those with diseases of the pancreas.
        </p>
        <h4 className="min-[1200px]:text-[24px] min-[800px]:text-[18px] text-[16px] font-bold text-[#3D3D3D] min-[1200px]:mt-[32px] mt-[16px]">
          Scope of the clinic:
        </h4>
        <p className="text-[#414049] min-[1200px]:text-[16px] text-[800px]:text-[14px] text-[13px] font-medium mt-[16px]">
          The clinic offers cutting-edge diagnostic and the latest treatment
          options for all pancreatic disorders which include:
        </p>
      </div>
      <div>
        {scopeItems.map((item, index) => (
          <div key={index} className="">
            <div className="flex items-center min-[1200px]:mt-[32px] min-[800px]:mt-[24px] mt-[10px]">
              <Image
                src="/assets/dots.svg"
                alt=""
                width={24}
                height={24}
                className="min-[1200px]:h-6 min-[800px]:h-5 h-4 min-[1200px]:w-6 min-[800px]:w-5 w-4"
              />
              <p className="ml-3 min-[1200px]:text-[18px] min-[800px]:text-[15px] text-[13px] text-[#3A3A3A]">
                {item.title}
              </p>
            </div>
            {item.subItems && item.subItems.length > 0 && (
              <ul className="list-disc list-inside mt-2 min-[1200px]:pl-[50px] min-[800px]:pl-[35px] pl-[30px] text-[#3A3A3A] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px]">
                {item.subItems.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PancreasClinic;
