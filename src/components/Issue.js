import React from 'react';
import { Link } from "react-router-dom";

export default function Issue() {
    return (
        <>
            <div className="container">
                <table class="table table-striped">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr.no.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Item_1</td>
                                {/* <td>{count1}</td> */}
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Item_2</td>
                                {/* <td>{count2}</td> */}
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Item_3</td>
                                {/* <td>{count3}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </table>
            </div>
        </>
    )
}
