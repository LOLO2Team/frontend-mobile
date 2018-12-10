import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar, List, NavBar, Icon } from 'antd-mobile';
const Item = List.Item;

export default class FetchList extends Component {
    render() {
        return (
            <div>
                {/* <Order /> */}

                <Item className="fetch-now" >
                    <i class="fa-icon fetch-now-icon fas fa-exclamation"></i>
                    <i class="car-icon fas fa-car"></i>
                    <div class="order-desc">
                        <div>Order ID </div>
                        <div></div>
                    </div>
                </Item>
            </div>
        )
    }
}
