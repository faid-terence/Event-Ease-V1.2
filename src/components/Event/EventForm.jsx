import React, { useState } from "react";

export const EventForm = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="max-w-6xl w-full bg-white shadow-md p-8 rounded-md mt-8">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Create Event
        </h1>
        <div className="flex justify-between">
          <div className="w-1/2 pr-8">
            <h2 className="text-xl font-semibold mb-4">Event Information</h2>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="eventName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="eventLocation"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Event Location
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                />
              </div>
            </form>
          </div>
          <div className="w-1/4 pr-8">
            <h2 className="text-xl font-semibold mb-4">
              Organizer Information
            </h2>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="organizerName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Organizer Name
                </label>
                <input
                  type="text"
                  id="organizerName"
                  name="organizerName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="organizerEmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Organizer Email
                </label>
                <input
                  type="email"
                  id="organizerEmail"
                  name="organizerEmail"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="organizerPhone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Organizer Phone
                </label>
                <input
                  type="tel"
                  id="organizerPhone"
                  name="organizerPhone"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                />
              </div>
            </form>
          </div>
          <div className="w-1/4 pl-8">
            <h2 className="text-xl font-semibold mb-4">Ticket Information</h2>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="ticketPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ticket Price
                </label>
                <input
                  type="number"
                  id="ticketPrice"
                  name="ticketPrice"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="ticketQuantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ticket Quantity
                </label>
                <input
                  type="number"
                  id="ticketQuantity"
                  name="ticketQuantity"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
