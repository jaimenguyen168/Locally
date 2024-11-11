//  get state from event and purchase
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import React, { useState } from "react";

import PrimaryButton from "@/components/PrimaryButton";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardPop from "@/components/CardPop";
import { Event } from "@/types/type";
import PurchasePopup from "@/components/PurchasePopup";
import CounterButton from "@/components/CounterButton";



const PurchaseScreen = () => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false); // this is to popup the payment confimed window

  const handleGoBack = () => {
    router.back(); // Goes back to the previous page
  };

  const handleBuy = () => {
    setPaymentConfirmed(true);
  };

  const event: Event = {
    id: 3,
    title: "Candlelight Fine Dining",
    coordinate: {
      latitude: 39.965519,
      longitude: -75.181053,
    },
    emote: "🍽️",
    category: "dining",
  };

  
  return (
    <View className="flex-1 mt-16 top-[20px] bg-green ">
      
      {/* Purchase Popup Screen */}
      <View className="allign-center">
        {paymentConfirmed && (
          <PurchasePopup nextPage={'./../ticket-screen'} eventName={event.title}>
          </PurchasePopup> )
        }
      </View>

      {/*----------------- Order Details Page ----------------*/}
      <View className="flex-col p-1">
        <TouchableOpacity onPress={handleGoBack}>
          <View className="flex-row gap-2 pl-3 pb-20 items-center ml-5">
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
            <Text className="text-2xl">Order Details</Text>
          </View>
        </TouchableOpacity>

        {/* Event Card */}
        <View className="pb-5 items-center">
          <CardPop
            event={event}
            style="bg-white p-2 rounded-2xl shadow-md w-[375px] flex-row items-center"
          />
        </View>

        {/* Purchase details */}
        <View className="flex-col mx-3 pt-5 gap-6">
          <View className="flex-row px-5">
            <Text className="text-xl font-bold">Order Summary</Text>
          </View>

          <View className="flex-row px-6 mr-3 justify-between">
            <Text>Ticket Price</Text>
            <Text className="text-[#39C3F2] font-semibold">$120.00</Text>
          </View>

          <View className="flex-row px-6 mr-3 justify-between">
            <Text>Amount</Text>
            <CounterButton/>            
          </View>

          <View className="flex-row px-6 mr-3 justify-between">
            <Text>Subtotal</Text>
            <Text className="text-[#39C3F2] font-semibold">$240.00</Text>
          </View>

          <View className="flex-row px-6 mr-3 justify-between">
            <Text>Fees(4%)</Text>
            <Text className="text-[#39C3F2] font-semibold">$9.60</Text>
          </View>

          {/* Divider */}
          <View className="h-[2] mx-5 mt-4 pr-5 bg-gray-400" />

          <View className="flex-row px-4 mr-3 justify-between">
            <Text className="text-2xl font-semibold">Total</Text>
            <Text className="text-2xl font-semibold">$249.60</Text>
          </View>
        </View>

        {/* Pay Now button */}
        <View className="absolute justify-center px-16 left-5 top-[650px] right-5">
          <TouchableOpacity>
            <PrimaryButton
              text="pay now"
              onPress={handleBuy}
              bgColor="bg-[#003566]"
              iconBgColor="bg-[#39C3F2]"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PurchaseScreen;
