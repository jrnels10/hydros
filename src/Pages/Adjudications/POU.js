import React, { Component } from 'react';
import { Card } from './../../components/Cards/Cards';

const formArray = [<form>
    <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
        <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
</form>, <form>
    <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
        <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
</form>, <form>
    <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
        <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
</form>]

export default class POU extends Component {
    render() {
        const { pou } = this.props;
        const manage = pou ? 'active' : 'hidden';
        return (
            <div className={`adj__manage__POU adj__manage__POU--${manage} `}>
                {formArray.map((form, idx) => <Card key={idx} formIdx={idx} title='title'>{form}</Card>)}
            </div >
        )
    }
}
