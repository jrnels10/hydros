import React, { Component } from 'react'
import TextInputs from '../../../components/Inputs/Inputs'
import { Card } from '../../../components/Cards/Cards'

export default class PWRforms extends Component {
    render() {

        return [
            <Card title='USE TYPE' key={0} formIdx={0}>
                <form className='row adj_form'>
                    <div className='col-4'>
                        <div className="form-group">
                            <label htmlFor="DWR_ID">DWR ID:</label>
                            <TextInputs name='DWR_ID' />
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className="form-group">
                            <label htmlFor="HSR_REGION">HSR REGION:</label>
                            <TextInputs name='HSR_REGION' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="WATERSHED">WATERSHED:</label>
                            <TextInputs name='WATERSHED' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="SUB">SUB:</label>
                            <TextInputs name='SUB' />
                        </div>
                    </div>
                </form>
                <form className='row adj_form_inline'>
                    <div className='col-5'>
                        <div className="form-group">
                            <label htmlFor="PWR_NAME">PWR NAME:</label>
                            <TextInputs name='PWR_NAME' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="PWR_ID">PWR ID:</label>
                            <TextInputs name='PWR_ID' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="WATERSOURCE">WATERSOURCE:</label>
                            <TextInputs name='WATERSOURCE' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="POU_CODE">POU CODE:</label>
                            <TextInputs name='POU_CODE' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="POU_SEQ">POU SEQ:</label>
                            <TextInputs name='POU_SEQ' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="QUANTITY">QUANTITY:</label>
                            <TextInputs name='QUANTITY' />
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="form-group">
                            <label htmlFor="APPT_FIRST_USE">APPT FIRST USE:</label>
                            <TextInputs name='APPT_FIRST_USE' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="PHOTO_DATE">PHOTO DATE:</label>
                            <TextInputs name='PHOTO_DATE' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="PRIORITY_DATE">PRIORITY DATE:</label>
                            <TextInputs name='PRIORITY_DATE' />
                        </div>
                    </div>
                </form>
                <form className='row adj_form_inline'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor="CLAIMANT">CLAIMANT:</label>
                            <TextInputs name='CLAIMANT' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="LAND_OWNER">LAND OWNER:</label>
                            <TextInputs name='LAND_OWNER' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="LESSEE_PERMITTEE">LESSEE/PERMITTEE:</label>
                            <TextInputs name='LESSEE_PERMITTEE' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="RIGHT_OWNER">RIGHT OWNER:</label>
                            <TextInputs name='RIGHT_OWNER' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <label className='w-100 text-center'>CONTACT INFORMATION</label>
                        <div className="form-group">
                            <label htmlFor="NAME">NAME:</label>
                            <TextInputs name='NAME' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ADDRESS">ADDRESS:</label>
                            <TextInputs name='ADDRESS' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CITY">CITY:</label>
                            <TextInputs name='CITY' />
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="STATE">STATE:</label>
                                    <TextInputs name='STATE' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="PHONE">PHONE:</label>
                                    <TextInputs name='PHONE' />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="ZIP">ZIP:</label>
                                    <TextInputs name='ZIP' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="EMAIL">EMAIL:</label>
                                    <TextInputs name='EMAIL' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form className='row adj_form_inline'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor="LEGAL_LOCATION">LEGAL LOCATION:</label>
                            <TextInputs name='LEGAL_LOCATION' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CADASTRAL">CADASTRAL:</label>
                            <TextInputs name='CADASTRAL' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ASSESSOR_PARCEL">ASSESSOR PARCEL:</label>
                            <TextInputs name='ASSESSOR_PARCEL' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="COUNTY">COUNTY:</label>
                            <TextInputs name='COUNTY' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <label className='w-100 text-center'>UTM</label>
                        <div className="form-group">
                            <label htmlFor="UTM_X">X:</label>
                            <TextInputs name='UTM_X' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="UTM_Y">Y:</label>
                            <TextInputs name='UTM_Y' />
                        </div>
                        <label className='w-100 text-center'>LAT / LONG</label>
                        <div className="form-group">
                            <label htmlFor="LAT">LAT:</label>
                            <TextInputs name='LAT' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="LONG">LONG:</label>
                            <TextInputs name='LONG' />
                        </div>
                    </div>
                </form>
            </Card>,
            <Card title='USE TYPE' key={1} formIdx={1}>
                <form className='row adj_form'>
                    <div className='col-4'>
                        <div className="form-group">
                            <label htmlFor="DWR_ID">DWR ID:</label>
                            <TextInputs name='DWR_ID' />
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className="form-group">
                            <label htmlFor="HSR_REGION">HSR REGION:</label>
                            <TextInputs name='HSR_REGION' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="WATERSHED">WATERSHED:</label>
                            <TextInputs name='WATERSHED' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="SUB">SUB:</label>
                            <TextInputs name='SUB' />
                        </div>
                    </div>
                </form>
                <form className='row adj_form_inline'>
                    <div className='col-5'>
                        <div className="form-group">
                            <label htmlFor="PWR_NAME">PWR NAME:</label>
                            <TextInputs name='PWR_NAME' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="PWR_ID">PWR ID:</label>
                            <TextInputs name='PWR_ID' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="WATERSOURCE">WATERSOURCE:</label>
                            <TextInputs name='WATERSOURCE' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="POU_CODE">POU CODE:</label>
                            <TextInputs name='POU_CODE' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="POU_SEQ">POU SEQ:</label>
                            <TextInputs name='POU_SEQ' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="QUANTITY">QUANTITY:</label>
                            <TextInputs name='QUANTITY' />
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="form-group">
                            <label htmlFor="APPT_FIRST_USE">APPT FIRST USE:</label>
                            <TextInputs name='APPT_FIRST_USE' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="PHOTO_DATE">PHOTO DATE:</label>
                            <TextInputs name='PHOTO_DATE' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="PRIORITY_DATE">PRIORITY DATE:</label>
                            <TextInputs name='PRIORITY_DATE' />
                        </div>
                    </div>
                </form>
                <form className='row adj_form_inline'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor="CLAIMANT">CLAIMANT:</label>
                            <TextInputs name='CLAIMANT' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="LAND_OWNER">LAND OWNER:</label>
                            <TextInputs name='LAND_OWNER' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="LESSEE_PERMITTEE">LESSEE/PERMITTEE:</label>
                            <TextInputs name='LESSEE_PERMITTEE' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="RIGHT_OWNER">RIGHT OWNER:</label>
                            <TextInputs name='RIGHT_OWNER' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <label className='w-100 text-center'>CONTACT INFORMATION</label>
                        <div className="form-group">
                            <label htmlFor="NAME">NAME:</label>
                            <TextInputs name='NAME' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ADDRESS">ADDRESS:</label>
                            <TextInputs name='ADDRESS' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CITY">CITY:</label>
                            <TextInputs name='CITY' />
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="STATE">STATE:</label>
                                    <TextInputs name='STATE' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="PHONE">PHONE:</label>
                                    <TextInputs name='PHONE' />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="ZIP">ZIP:</label>
                                    <TextInputs name='ZIP' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="EMAIL">EMAIL:</label>
                                    <TextInputs name='EMAIL' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form className='row adj_form_inline'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor="LEGAL_LOCATION">LEGAL LOCATION:</label>
                            <TextInputs name='LEGAL_LOCATION' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CADASTRAL">CADASTRAL:</label>
                            <TextInputs name='CADASTRAL' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ASSESSOR_PARCEL">ASSESSOR PARCEL:</label>
                            <TextInputs name='ASSESSOR_PARCEL' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="COUNTY">COUNTY:</label>
                            <TextInputs name='COUNTY' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <label className='w-100 text-center'>UTM</label>
                        <div className="form-group">
                            <label htmlFor="UTM_X">X:</label>
                            <TextInputs name='UTM_X' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="UTM_Y">Y:</label>
                            <TextInputs name='UTM_Y' />
                        </div>
                        <label className='w-100 text-center'>LAT / LONG</label>
                        <div className="form-group">
                            <label htmlFor="LAT">LAT:</label>
                            <TextInputs name='LAT' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="LONG">LONG:</label>
                            <TextInputs name='LONG' />
                        </div>
                    </div>
                </form>
            </Card>
        ]
    }
}
