import React, {useEffect} from 'react';
import { TextField, Grid, Button} from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CountryDropdown } from 'react-country-region-selector';
import {useActions} from "../../../redux/actions";
import * as PersonActions from "../../../redux/actions/person";

const AddPerson = (props) => {
    const {id} = props;
    const personActions = useActions(PersonActions);
    const [person, setPerson] = React.useState();

    useEffect(()=> {
        if(id){
            getPersonDetail();
        }
    }, []);

    const getPersonDetail = async () => {
        let response = await personActions.getPersonDetail(id);
        if(response && response.data && response.data.data){
            setPerson(response.data.data); 
        }
    }


    return(
        <Formik
                enableReinitialize={true}
                initialValues={{
                    username: person && person.username || '',
                    email: person && person.email || '',
                    dob: person && person.dob || '',
                    mobileNo: person && person.mobileNo || '',
                    country: person && person.country || '',
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('User Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                        mobileNo : Yup.number().typeError('Mobile No must be a numeric')
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    let payload = values;
                    if(id){
                        await personActions.update(id, payload);
                    }else{
                        await personActions.add(payload);
                    }
                    
                    props.history.push("/");
                    setTimeout(() => {
                        setSubmitting(false);
                      }, 400);
                }}
                render={({ values, errors, touched, isSubmitting, setFieldValue, handleChange, handleBlur, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container >
                            <Grid item xs={12}>
                                 <TextField 
                                    id="username" 
                                    name="username" 
                                    label="Username*" 
                                    variant="outlined" 
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    margin="normal"
                                    error={touched.username && Boolean(errors.username)}
                                    helperText={touched.username && errors.username}    
                                />    
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField 
                                    id="email" 
                                    name="email" 
                                    label="Email*" 
                                    variant="outlined" 
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    margin="normal"
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}    
                                /> 
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                    size="medium"
                                    id="mobileNo" 
                                    name="mobileNo" 
                                    label="Mobile Number" 
                                    variant="outlined" 
                                    value={values.mobileNo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    margin="normal"
                                    error={touched.mobileNo && Boolean(errors.mobileNo)}
                                    helperText={touched.mobileNo && errors.mobileNo}    
                                /> 
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    id="dob" 
                                    name="dob" 
                                    label="DOB" 
                                    variant="outlined" 
                                    value={values.dob}
                                    type="date"
                                    InputLabelProps={{
                                        shrink : true
                                    }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    margin="normal"
                                    error={touched.mobileNo && Boolean(errors.mobileNo)}
                                    helperText={touched.mobileNo && errors.mobileNo}    
                                /> 
                            </Grid>

                            <Grid item xs={12}>
                                <div className="MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal">
                                    <CountryDropdown
                                        style={{padding: "15px 5px", maxWidth:'60%', borderRadius:5}}
                                        value={values.country}
                                        onChange={(val)=>setFieldValue('country', val)}
                                        onBlur={(val)=>setFieldValue('country', val)}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Button color="primary" variant="contained" type="submit" disabled={isSubmitting}>
                                {id ? "Update" : 'Create'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            />
    );
}

export default AddPerson;