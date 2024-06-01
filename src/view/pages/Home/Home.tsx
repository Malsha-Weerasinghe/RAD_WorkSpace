import {Component} from "react";
import spinach from '../../../images/products/spinach (1).png'
import beans from '../../../images/products/img_2.png'
import tomato from '../../../images/products/img_1.png'
import bellPepper from '../../../images/products/img_5.png'
import pumpkin from '../../../images/products/img_4.png'
import radish from '../../../images/products/img_6.png'

export class Home extends Component {

    render() {
        return (
            <div className="flex">
                {/*Row 01  */}
                <div className="flex
                               flex-wrap
                               ml-[1px]
                               mt-10
                               mb-5
                               justify-center
                               items-center
                               mx-auto">
                    <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                        <div>
                            <img className="h-[88px] w-[88px]" src={spinach} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary text-[12px] pl-2">Spinach</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">200 <small className="text-[7px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full mt-1 p-[2.4px] bg-green-400 text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                        </div>
                    </div>
                    <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                        <div>
                            <img className="h-[88px] w-[88px]" src={beans} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary text-[12px] pl-2">Beans</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">200 <small className="text-[7px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full mt-1 p-[2.4px] bg-green-400 text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                        </div>
                    </div>
                    <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                        <div>
                            <img className="h-[88px] w-[88px]" src={tomato} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary text-[12px] pl-2">Tomato</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">200 <small className="text-[7px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full mt-1 p-[2.4px] bg-green-400 text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                        </div>
                    </div>
                    <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                        <div>
                            <img className="h-[88px] w-[88px]" src={bellPepper} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary text-[12px] pl-2">Bell Pepper</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">200 <small className="text-[7px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full mt-1 p-[2.4px] bg-green-400 text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                        </div>
                    </div>
                    <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                        <div>
                            <img className="h-[88px] w-[88px]" src={pumpkin} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary text-[12px] pl-2">Pumpkin</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">200 <small className="text-[7px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full mt-1 p-[2.4px] bg-green-400 text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                        </div>
                    </div>
                    <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                        <div>
                            <img className="h-[88px] w-[88px]" src={radish} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary text-[12px] pl-2">Radish</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">200 <small className="text-[7px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full mt-1 p-[2.4px] bg-green-400 text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}