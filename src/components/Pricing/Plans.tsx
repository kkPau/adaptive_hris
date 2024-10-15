const Plans = () => {
  const plans: { offer: string; description: string; features: string[] }[] = [
    {
      offer: "Standard",
      description:
        "Automate HR with Adaptive HRIS, give your business the technology it deserves.",
      features: [
        "Employee Records",
        "Payroll",
        "Self - Service",
        "Email Support",
      ],
    },
    {
      offer: "Premium",
      description:
        "Experience flawless HR operations with Adaptive HRIS. Automate tasks and save time!",
      features: [
        "Standard Package",
        "Leave Management",
        "Performance Management",
        "Time and Attendance",
        "Email & Phone Support",
      ],
    },
    {
      offer: "Enterprise",
      description:
        "Transform and digitize your HRIS with an enterprise-ready HR platform that optimizes your business processes.",
      features: [
        "Premium Package",
        "Medicals",
        "Salary Advance",
        "Dedicated Personnel Support",
      ],
    },
  ];

  return (
    <div className="text-center py-10">
      <div className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl mb-10">
        Choose your plan
      </div>
      <div className="text-gray-500 text-[10px] md:text-sm lg:text-base mb-10">
        Choose a package that is right for you
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8 sm:mx-20 md:mx-10 lg:mx-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-primary flex flex-col overflow-clip text-white rounded-xl pt-8 h-[60vh]"
          >
            <div className="">
              <div className="text-3xl font-semibold mb-10">{plan.offer}</div>
              <div className="text-start px-6 mb-8">{plan.description}</div>
              <div className="flex justify-start px-6">
                <button className="px-8 py-4 border border-white rounded-full mb-5 transition-transform hover:scale-110">
                  Choose Plan →
                </button>
              </div>
            </div>
            <div className="px-4 bg-blue-300 flex-grow">
              <div className="mt-3 text-primary">Top Features</div>
              {plan.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-start space-x-10 space-y-3"
                >
                  <div className="bg-primary flex justify-center items-center p-1 w-4 h-4 rounded-full">
                    <div className="bg-blue-300 w-1 h-1 rounded-full"></div>
                  </div>
                  <div className="font-semibold">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-gray-500 text-[10px] md:text-sm lg:text-base mb-10 mt-16">
        Unlock the Full Potential of Your HR with Adaptive HRIS
      </div>
      <button className="px-5 py-3 rounded-full border border-gray-950">
        Request a Demo
      </button>
    </div>
  );
};

export default Plans;
