import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import customAxios from '../../network/axios';

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calendarFocused: false,
            name: {
                first: '',
                middle: '',
                last: '',
                nickname: ''
            },
            address: {
                street: '',
                city: '',
                state: '',
                zipCode: ''
            },
            birthdate: moment(),
            phones: {
                home: {
                    isPrimary: false,
                    number: ''
                },
                cell: {
                    isPrimary: false,
                    number: ''
                },
                work: {
                    isPrimary: false,
                    number: '',
                    ext: ''
                }
            },
            email: '',
            employment: {
                place: '',
                occupation: ''
            },
            gender: 'Male',
            legalStatus: 'Single',
            previousPlay: {
                havePlayedBefore: false,
                location: '',
                lastYearOfPlay: '',
                lastSkillLevel: '7'
            },
            friendInterested: {
                name: {
                    first: '',
                    last: '',
                    nickname: '',
                },
                phone: '',
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('Form Props: \n', nextProps);
        this.setState({ 
            ...nextProps.player,
            birthdate: moment(nextProps.player.birthdate)
        });
    }

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = async (e) => {
        e.preventDefault();

        this.props.onSubmit({
            player: {
                name: this.state.name,
                address: this.state.address,
                birthdate: this.state.birthdate.valueOf(),
                phones: this.state.phones,
                email: this.state.email,
                employment: this.state.employment,
                gender: this.state.gender,
                legalStatus: this.state.legalStatus,
                previousPlay: this.state.previousPlay,
                friendInterested: this.state.friendInterested
            }
        });
    };

    onRemove = () => {
        const shouldRemove = confirm(`Are you sure you want to remove ${this.state.name.first} ${this.state.name.last}?`);

        if (shouldRemove) {
            this.props.onRemove();
        }
    };

    render() {
        return (
            <div className="box-layout box-layout--vertical">
                <div className="box-layout">
                    <div className="form">
                        <div className="box-layout__box form__fieldset-container">
                            <span className="form__fieldset-title">Name</span>
                            <div className="form__fieldset">
                                <input className="text-input" type="text" placeholder="First" onChange={(e) => this.setState({ name: { ...this.state.name, first: e.target.value } })} value={this.state.name.first} />
                                <input className="text-input" type="text" placeholder="Middle" onChange={(e) => this.setState({ name: { ...this.state.name, middle: e.target.value } })} value={this.state.name.middle} />
                                <input className="text-input" type="text" placeholder="Last" onChange={(e) => this.setState({ name: { ...this.state.name, last: e.target.value } })} value={this.state.name.last} />
                                <input className="text-input" type="text" placeholder="Nickname" onChange={(e) => this.setState({ name: { ...this.state.name, nickname: e.target.value } })} value={this.state.name.nickname} />
                            </div>
                        </div>
                        <div className="box-layout__box form__fieldset-container">
                            <span className="form__fieldset-title">Address</span>
                            <div className="form__fieldset">
                                <input className="text-input" type="text" placeholder="Street" onChange={(e) => this.setState({ address: { ...this.state.address, street: e.target.value }})} value={this.state.address.street} />
                                <input className="text-input" type="text" placeholder="City" onChange={(e) => this.setState({ address: { ...this.state.address, city: e.target.value }})} value={this.state.address.city} />
                                <input className="text-input" type="text" placeholder="State" onChange={(e) => this.setState({ address: { ...this.state.address, state: e.target.value }})} value={this.state.address.state} />
                                <input className="text-input" type="text" placeholder="Zip Code" onChange={(e) => this.setState({ address: { ...this.state.address, zipCode: e.target.value }})} value={this.state.address.zipCode} />
                            </div>
                        </div>
                        <div className="box-layout__box form__fieldset-container">
                            <span className="form__fieldset-title">Contact</span>
                            <div className="form__fieldset form__fieldset--alt">
                                <input className="text-input" type="text" placeholder="Email Address" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                            </div>
                            <div className="form__fieldset form__fieldset--alt">
                                <input className="text-input" type="text" placeholder="Cell #" onChange={(e) => this.setState({ phones: { ...this.state.phones, cell: { ...this.state.phones.cell, number: e.target.value }}})} value={this.state.phones.cell.number} />
                                <input type="checkbox" id="cellIsPrimary" onChange={(e) => this.setState({ phones: { ...this.state.phones, cell: { ...this.state.phones.cell, isPrimary: e.target.checked }}})} checked={this.state.phones.cell.isPrimary} />
                                <label htmlFor="cellIsPrimary">Primary</label>
                            </div>
                            <div className="form__fieldset form__fieldset--alt">
                                <input className="text-input" type="text" placeholder="Home #" onChange={(e) => this.setState({ phones: { ...this.state.phones, home: { ...this.state.phones.home, number: e.target.value }}})} value={this.state.phones.home.number} />
                                <input type="checkbox" id="homeIsPrimary" onChange={(e) => this.setState({ phones: { ...this.state.phones, home: { ...this.state.phones.home, isPrimary: e.target.checked }}})} checked={this.state.phones.home.isPrimary} />
                                <label htmlFor="homeIsPrimary">Primary</label>
                            </div>
                            <div className="form__fieldset form__fieldset--alt">
                                <input className="text-input" type="text" placeholder="Work #" onChange={(e) => this.setState({ phones: { ...this.state.phones, work: { ...this.state.phones.work, number: e.target.value }}})} value={this.state.phones.work.number} />
                                <input className="text-input" type="text" placeholder="Work Ext." onChange={(e) => this.setState({ phones: { ...this.state.phones, work: { ...this.state.phones.work, ext: e.target.value }}})} value={this.state.phones.work.ext} />
                                <input type="checkbox" id="workIsPrimary" onChange={(e) => this.setState({ phones: { ...this.state.phones, work: { ...this.state.phones.work, isPrimary: e.target.checked }}})} checked={this.state.phones.work.isPrimary} />
                                <label htmlFor="workIsPrimary">Primary</label>
                            </div>
                        </div>
                        <div className="box-layout__box form__fieldset-container">
                            <span className="form__fieldset-title">Personal</span>
                            <div className="form__fieldset form__fieldset--alt">
                                <label htmlFor="birthdate">Birthdate</label>
                                <SingleDatePicker 
                                    id="birthdate"
                                    date={this.state.birthdate}
                                    onDateChange={(date) => {
                                        console.log('Date changing!', date);
                                        this.setState({ birthdate: date });
                                    }}
                                    focused={this.state.calendarFocused}
                                    onFocusChange={this.onCalendarFocusChange}
                                    numberOfMonths={1}
                                    isOutsideRange={(day) => false} />
                            </div>
                            <div className="form__fieldset form__fieldset--alt">
                                <label htmlFor="gender">Gender</label>
                                <select
                                    className="select"
                                    id="gender"
                                    onChange={(e) => this.setState({ gender: e.target.value })}
                                    value={this.state.gender}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form__fieldset form__fieldset--alt">
                                <label htmlFor="legalStatus">Legal Status</label>
                                <select
                                    className="select"
                                    id="legalStatus"
                                    onChange={(e) => this.setState({ legalStatus: e.target.value })}
                                    value={this.state.legalStatus}>
                                    <option>Married</option>
                                    <option>Single</option>
                                    <option>Separated</option>
                                    <option>Widowed</option>
                                </select>
                            </div>
                            <div className="form__fieldset">
                                <input className="text-input" type="text" placeholder="Place of Employment" onChange={(e) => this.setState({ employment: { ...this.state.employment, place: e.target.value }})} value={this.state.employment.place} />
                                <input className="text-input" type="text" placeholder="Occupation" onChange={(e) => this.setState({ employment: { ...this.state.employment, occupation: e.target.value }})} value={this.state.employment.occupation} />
                            </div>
                        </div>
                        <div className="box-layout__box form__fieldset-container">
                            <span className="form__fieldset-title">Previous Play</span>
                            <div className="form__fieldset form__fieldset--alt">
                                <input type="checkbox" id="havePlayedBefore" onChange={(e) => this.setState({ previousPlay: { ...this.state.previousPlay, havePlayedBefore: e.target.checked }})} checked={this.state.previousPlay.havePlayedBefore} />
                                <label htmlFor="havePlayedBefore">I have played APA before</label>
                            </div>
                            <div className="form__fieldset">
                                <input className="text-input" type="text" placeholder="Previous Location of Play" onChange={(e) => this.setState({ previousPlay: { ...this.state.previousPlay, location: e.target.value }})} value={this.state.previousPlay.location} />
                                <input className="text-input" type="text" placeholder="Last Year of Play" onChange={(e) => this.setState({ previousPlay: { ...this.state.previousPlay, lastYearOfPlay: e.target.value }})} value={this.state.previousPlay.lastYearOfPlay} />
                                <div className="form__fieldset form__fieldset--alt">
                                    <label htmlFor="previousSkillLevel">Previous Skill Level</label>
                                    <select
                                        className="select"
                                        id="previousSkillLevel"
                                        onChange={(e) => this.setState({ previousPlay: { ...this.state.previousPlay, lastSkillLevel: e.target.value } })}
                                        value={this.state.previousPlay.lastSkillLevel}>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>I don't remember</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="box-layout__box form__fieldset-container">
                            <span className="form__fieldset-title">Friend Interested</span>
                            <div className="form__fieldset">
                                <input className="text-input" type="text" placeholder="First" onChange={(e) => this.setState({ friendInterested: { ...this.state.friendInterested, name: { ...this.state.friendInterested.name, first: e.target.value }}})} value={this.state.friendInterested.name.first} />
                                <input className="text-input" type="text" placeholder="Last" onChange={(e) => this.setState({ friendInterested: { ...this.state.friendInterested, name: { ...this.state.friendInterested.name, last: e.target.value }}})} value={this.state.friendInterested.name.last} />
                                <input className="text-input" type="text" placeholder="Nickname" onChange={(e) => this.setState({ friendInterested: { ...this.state.friendInterested, name: { ...this.state.friendInterested.name, nickname: e.target.value }}})} value={this.state.friendInterested.name.nickname} />
                                <input className="text-input" type="text" placeholder="Phone" onChange={(e) => this.setState({ friendInterested: { ...this.state.friendInterested, phone: e.target.value }})} value={this.state.friendInterested.phone} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-layout">
                    <div className="box-layout__box">
                        <input type="button" className="button" value="Submit" onClick={this.onSubmit} />
                        { this.props.onRemove && (
                            <input type="button" className="button button--danger" value="Remove" onClick={this.onRemove} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerForm;