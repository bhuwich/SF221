import React from 'react';
import {View} from "native-base";
import Icon from 'react-native-vector-icons/AntDesign';
import IconName from 'react-native-vector-icons/Ionicons';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';

class Homepage extends React.Component {
    render(){
        LocaleConfig.locales['fr'] = {
            monthNames: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            today: "Today"
        };
        LocaleConfig.defaultLocale = 'fr';
        return(
            <View style={{flex:1,backgroundColor: '#FFFFFF'}}>
                <View style={{

                    backgroundColor: '#FFFFFF',
                    width:'100%',
                    height:400

                }}>
                    <View >
                        <Calendar
                            style={{marginLeft:5 ,marginRight:5,marginTop:10}}
                            theme={{
                                'stylesheet.calendar.header': {
                                    header: {
                                        justifyContent: 'flex-start',
                                        marginTop: 6,
                                        marginBottom: 10,
                                        marginLeft: 17,

                                    },
                                    monthText: {
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        color: '#2F2E41'
                                    },
                                    dayHeader: {
                                        marginLeft:10,
                                        width:25,
                                        marginTop: 10,
                                        fontWeight: 'bold',
                                        color: '#2F2E41'
                                    },
                                },
                                todayBackgroundColor: '#FF975C',
                                todayTextColor:'white',
                                textDayFontWeight: 'bold',
                                dayTextColor: '#2F2E41',
                            }}
                            hideArrows
                            enableSwipeMonths={true}
                            horizontal={true}
                            hideExtraDays={false}
                            showSixWeeks={true}
                        >
                        </Calendar>
                    </View>

                </View>


            </View>

        );
    }
}
export default Homepage;
