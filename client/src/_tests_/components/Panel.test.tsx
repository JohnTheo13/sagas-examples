import React from "react";
import { mount } from "enzyme";

import MockedProvider, { makeTestStore } from "../mock/StoreProvider";
import Panel from "../../components/Panel";
import { ArrowUp, ArrowDown } from "../../components/Panel/style"

describe("Panel test", () => {
	it("Should render the right text", () => {
		const currentSetpoint = 18;
		const currentTemp = 21;
		const store = makeTestStore({ currentSetpoint, currentTemp });
    const wrapper = mount(
      <MockedProvider mockedStore={store}>
        <Panel />
      </MockedProvider>
    );
		expect(wrapper.find("h2").text()).toBe(`${currentTemp} °C`);
		expect(wrapper.find(ArrowDown)).toHaveLength(1)
	});
	it("Should render arrow Up", () => {
		const currentSetpoint =	30;
		const currentTemp = 21;
		const store = makeTestStore({ currentSetpoint, currentTemp });
    const wrapper = mount(
      <MockedProvider mockedStore={store}>
        <Panel />
      </MockedProvider>
    );
		expect(wrapper.find(ArrowUp)).toHaveLength(1)
	});
	
});
