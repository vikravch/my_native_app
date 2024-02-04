import ActivityRepository from "./domain/repository/ActivityRepository";
import {View} from "react-native";
import MainPage from "./presentation/page/MainPage";
import NavLayout from "./presentation/component/nav/NavLayout";

export const repository = new ActivityRepository();

export default function App() {
    return (
        <View style={{
            flex:1
        }}>
            <MainPage/>
            <NavLayout/>
        </View>
    )

}



// Uncle Bob
// Clean Architecture

