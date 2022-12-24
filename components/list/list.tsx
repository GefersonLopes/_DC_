import { useContext } from "react";
import { AuthContext } from "../../context/provider";
import { videos } from "../../pages/api/hello";
import { PlayerList_Styled, SectionList_Styled } from "./styled";
import { motion } from "framer-motion";

export const List = () => {
    const { data } = useContext(AuthContext);
    const categoriesVideos = videos.map(element => element.category);
    const categoriesVideosFiltred = categoriesVideos.filter(function(ele , pos){
        return categoriesVideos.indexOf(ele) == pos;
    }); 

    return (
        <SectionList_Styled>
            <div>
                <ul className="ListFilter">
                    <li>
                        <button className="checked" onClick={() => data.filterPlayerList("Todos")}>Todos</button>
                    </li>
                    {categoriesVideosFiltred.map((item, index) => (
                        
                        <li key={index}>
                            <button onClick={() => data.filterPlayerList(item)}>{item}</button>        
                        </li>
                    ))}
                </ul>
            </div>
            <PlayerList_Styled>
                {data.playerList.map((item) => {
                    return (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2.3 }}
                        >
                            <div>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.auth}</p>
                                <span>{item.desc}</span>
                                {item.new && <button style={{marginLeft: "0.5rem"}}>Novo</button>}
                            </div>
                        </motion.li>
                    );
                })}
            </PlayerList_Styled>
        </SectionList_Styled>
    );
};
