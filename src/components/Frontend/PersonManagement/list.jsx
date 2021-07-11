import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardView from '../../common/CardView';
import AddCard from '../../common/AddCard';
import Button from '@material-ui/core/Button';
import {useActions} from "../../../redux/actions";
import * as PersonActions from "../../../redux/actions/person";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding : 100
    },
    addBtnRoot : {
        margin : '0 15px'
    }
  }));

const List = (props) => {
    const classes = useStyles();
    const personActions = useActions(PersonActions);
    const [personList, setPersonList] = React.useState([]);

    useEffect(()=> {
        getPersonsListData();
    }, []);

    const getPersonsListData = async () => {
        let response = await personActions.getList();
        if(response && response.data && response.data.data){
            setPersonList(response.data.data); 
        }
    }

    const getPersonsList = (persons = []) => {
        if(persons.length === 0){
            return <AddCard {...props} message={"There are no Person Added yet!"} buttonText={"Add Person"} rediectUrl={"/person/add"} />
        }

        return persons.map( (person, index) => (
            <Grid key={index} item xs={12} md={3}>
                <CardView {...props} id={person.id} avatar={person.avatar || ""} name={person.username} email={person.email} dob={person.dob + ""} />
            </Grid>
        ));
    }

    return (
        <Grid container className={classes.root} spacing={2}>
            {personList.length > 0 &&
            <Grid container className={classes.addBtnRoot}>
                <Grid item xs={12}>
                    <Button 
                        size="small" 
                        variant="contained" 
                        color={"primary"} 
                        onClick={()=> {
                            props.history.push("/person/add")}
                        }
                        >
                        + Add New Person
                    </Button>
                </Grid>
            </Grid>
            }
            {getPersonsList(personList)}
        </Grid>
    );
}

export default List;

 