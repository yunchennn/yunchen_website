import { useState, useEffect, useContext, createContext, ReactNode, Dispatch, SetStateAction } from "react";

// create parent provider
export function AppProviders({ children }) {
    return (
        <ProjectNumberProvider>
            <SubStateProvider>
            <StateProvider>
                
                { children }
                
            </StateProvider> 
            </SubStateProvider>
        </ProjectNumberProvider>
                                                
    );
};

////////////
// STATE //
///////////
export const StateContext = createContext(null);
export function StateProvider({ children }) {
    const [state, setState] = useState("home");
    
    return (
        <StateContext.Provider value={{ state, setState }}>
            { children }
        </StateContext.Provider>
    );
};

export function useCurrState() {
    const info = useContext(StateContext);
    if (!info) {
        throw new Error('useCurrState must be used within a StateContext');
    }
    return info
};

//////////////
// Project Number//
/////////////
export const ProjectNumberContext = createContext(null);
export function ProjectNumberProvider({ children }) {
    const [projectNumber, setProjectNumber] = useState(""); // Default projectNumber is empty string
    
    return (
        <ProjectNumberContext.Provider value={{ projectNumber, setProjectNumber }}>
            {children}
        </ProjectNumberContext.Provider>
    );
};

export function useCurrProjectNum() {
    const context = useContext(ProjectNumberContext);
    if (!context) {
        throw new Error(
            'useCurrProjectNum must be used within a ProjectNumberProvider. Wrap your app with <ProjectNumberProvider>.'
        );
    }
    return context;
};


//////////////
// sub State//
/////////////
export const SubStateContext = createContext(null);
export function SubStateProvider({ children }) {
    const [subState, setSubState] = useState("");
    
    return (
        <SubStateContext.Provider value={{ subState, setSubState }}>
            { children }
        </SubStateContext.Provider>
    );
};

export function useSubState() {
    const info = useContext(SubStateContext);
    if (!info) {
        throw new Error('useSubState must be used within a subStateContext');
    }
    return info
};

// ///////////////
// // CATEGORY //
// //////////////
// export const CategoryContext = createContext(null);

// export function CategoryProvider({ children }) {
//     const [category, setCategory] = useState("");

//     return (
//         <CategoryContext.Provider value={{ category, setCategory }}>
//             { children }
//         </CategoryContext.Provider>
//     );
// };

// export function useCategory() {
//     const info = useContext(CategoryContext);
//     if (!info) {
//         throw new Error('useCategory must be used within a CategoryContext');
//     }
//     return info
// };

// ///////////
// // ITEM //
// //////////
// export const ItemContext = createContext(null);

// export function ItemProvider({ children }) {
//     const [item, setItem] = useState("");

//     return (
//         <ItemContext.Provider value={{ item, setItem }}>
//             { children }
//         </ItemContext.Provider>
//     );
// };

// export function useItem() {
//     const info = useContext(ItemContext);
//     if (!info) {
//         throw new Error('useItem must be used within a ItemContext');
//     };
//     return info
// };

// /////////////
// // ISVOICE //
// ////////////
// export const isVoiceContext = createContext(null);

// export function IsVoiceProvider({ children }) {
//     const [isVoice, setIsVoice] = useState(false);

//     return (
//         <isVoiceContext.Provider value={{ isVoice, setIsVoice }}>
//             { children }
//         </isVoiceContext.Provider>
//     );
// };

// export function useIsVoice() {
//     const info = useContext(isVoiceContext);
//     if (!info) {
//         throw new Error('useIsVoice must be used within a isVoiceContext');
//     }
//     return info
// };

// ///////////////////
// // VEHICLE INFO //
// //////////////////
// export const vehicleInfoContext = createContext(null);

// export function VehicleInfoProvider({ children }) {
//     const [vehicleInfo, setVehicleInfo] = useState({ "make": "", "model": "", "year": "" });

//     return (
//         <vehicleInfoContext.Provider value={{ vehicleInfo, setVehicleInfo }}>
//             { children }
//         </vehicleInfoContext.Provider>
//     );
// };

// export function useVehicleInfo() {
//     const info = useContext(vehicleInfoContext);
//     if (!info) {
//         throw new Error('useVehicleInfo must be used within a vehicleInfoContext');
//     }
//     return info
// };

// //////////////////
// // ISSEARCHLIST //
// /////////////////
// export const SearchListContext = createContext(null);

// export function SearchListProvider({ children }) {
//     const [searchList, setSearchList] = useState([]);

//     return (
//         <SearchListContext.Provider value={{ searchList, setSearchList }}>
//             { children }
//         </SearchListContext.Provider>
//     );
// };

// export function useSearchList() {
//     const info = useContext(SearchListContext);
//     if (!info) {
//         throw new Error('useSearchList must be used within a SearchListContext');
//     }
//     return info
// };

// //////////////////
// ///// PAGE //////
// /////////////////
// export const PageContent = createContext(null);

// export function PageProvider({ children }) {
//     const [page, setPage] = useState("");

//     return (
//         <PageContent.Provider value={{ page, setPage }}>
//             { children }
//         </PageContent.Provider>
//     );
// };

// export function usePage() {
//     const info = useContext(PageContent);
//     if (!info) {
//         throw new Error('usePage must be used within a PageContext');
//     }
//     return info
// }

// //////////////////
// // ONLINE ASR ///
// /////////////////
// export const OnlineASRContext = createContext(null);

// export function OnlineASRProvider({ children }) {
//     const [onlineASR, setOnlineASR] = useState();

//     return (
//         <OnlineASRContext.Provider value={{ onlineASR, setOnlineASR }}>
//             { children }
//         </OnlineASRContext.Provider>
//     );
// };

// export function useOnlineASR() {
//     const info = useContext(OnlineASRContext);
//     if (!info) {
//         throw new Error('useOnlineASR must be used within a OnlineASRContext');
//     }
//     return info
// };


// ///////////
// // DATA //
// //////////
// export const BackendDataContext = createContext(null);

// export function BackendDataProvider({ children }) {
//     const [backendData, setBackendData] = useState({});

//     return (
//         <BackendDataContext.Provider value={{ backendData, setBackendData }}>
//             { children }
//         </BackendDataContext.Provider>
//     )
// };

// export function useBackendData() {
//     const info = useContext(BackendDataContext);
//     if (!info) {
//         throw new Error("useBackendData must be used within a BackendDataContext");
//     };
//     return info
// };


// ///////////////////
// // Display Name //
// //////////////////
// export const DisplayNameContext = createContext(null);

// export function DisplayNameProvider({ children }) {
//     const [displayName, setDisplayName] = useState("");

//     return (
//         <DisplayNameContext.Provider value={{ displayName, setDisplayName }}>
//             { children }
//         </DisplayNameContext.Provider>
//     )
// };

// export function useDisplayName() {
//     const info = useContext(DisplayNameContext);
//     if (!info) {
//         throw new Error("useDisplayName must be used within a DisplayNameContext");
//     };
//     return info
// };

// ///////////////
// // REC DATA //
// //////////////
// export const RecProductDataContext = createContext(null);

// export function RecProductDataProvider({ children }) {
//     const [recProductData, setRecProductData] = useState({});

//     return (
//         <RecProductDataContext.Provider value={{ recProductData, setRecProductData }}>
//             { children }
//         </RecProductDataContext.Provider>
//     )
// };

// export function useRecProductData() {
//     const info = useContext(RecProductDataContext);
//     if (!info) {
//         throw new Error("useRecProductData must be used within a BackendDataContext");
//     };
//     return info
// };

// ///////////////
// // GO BACK ///
// //////////////
// export const GoBackLevelContext = createContext(null);

// export function GoBackLevelProvider({ children }) {
//     const [goBackLevel, setGoBackLevel] = useState(false);

//     return (
//         <GoBackLevelContext.Provider value={{ goBackLevel, setGoBackLevel }}>
//             { children }
//         </GoBackLevelContext.Provider>
//     )
// };

// export function useGoBackLevel() {
//     const info = useContext(GoBackLevelContext);
//     if (!info) {
//         throw new Error("useGoBack must be used within a GoBackContext");
//     };
//     return info
// };

// ///////////////
// // ADD CART //
// //////////////
// export const AddCartContext = createContext(null);

// export function AddCartProvider({ children }) {
//     const [addCart, setAddCart] = useState(false);

//     return (
//         <AddCartContext.Provider value={{ addCart, setAddCart }}>
//             { children }
//         </AddCartContext.Provider>
//     )
// };

// export function useAddCart() {
//     const info = useContext(AddCartContext);
//     if (!info) {
//         throw new Error("useAddCart must be used within a AddCartContext");
//     };
//     return info
// };
