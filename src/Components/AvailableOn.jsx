import React from "react";

const AvailableOn = () => {
  return (
    <div class="bg-black flex items-center justify-between">
      <div class="max-w-2xl mx-auto text-white py-10">
        <div class="text-center">
          <h3 class="text-3xl mb-3"> Download our yum yum app </h3>
          <p> Eat healthy, Stay healthy. </p>
          <div class="flex justify-center my-10">
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                class="w-7 md:w-8"
              />
              <div class="text-left ml-3">
                <p class="text-xs text-gray-200">Download on </p>
                <p class="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                class="w-7 md:w-8"
              />
              <div class="text-left ml-3">
                <p class="text-xs text-gray-200">Download on </p>
                <p class="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableOn;
