import React, { Component } from 'react';
import HabitForm from './HabitForm';
import HabitItem from './HabitItem';

class Habits extends Component {
    render() {
        return (
            <div>
                <HabitForm />
                <HabitItem />
            </div>
        );
    }
}

export default Habits;