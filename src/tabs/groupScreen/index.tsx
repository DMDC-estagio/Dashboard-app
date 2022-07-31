import React from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem, Avatar } from "@rneui/themed";

import { style } from '../styles'

const listInfo = [
  { name: "Prof. Clóvis Petry",
    avatarUrl: "https://yt3.ggpht.com/ytc/AKedOLQUQewMtBXCQ4-Sh-6It2Qgol6hQHBaVJugvEINMQ=s900-c-k-c0x00ffffff-no-rj",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    { name: "Gabriel Gonçalves Novalski",
    avatarUrl: "https://avatars.githubusercontent.com/u/99911394?v=4",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gthb: "@gab5987" },
    { name: "Lucas Aguiar",
    avatarUrl: "https://avatars.githubusercontent.com/u/43057423?v=4",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gthb: "@lusqua" },
    { name: "Davi Orlandi",
    avatarUrl: "https://avatars.githubusercontent.com/u/100883209?v=4",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gthb: "@d4vz" },
];


export function GroupScreen() {
    return(
      <ScrollView>
        <View>
          {listInfo.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar rounded source={{uri: l.avatarUrl}} />
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }} >{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.info}</ListItem.Subtitle>
                <ListItem.Subtitle>{l.gthb}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </ScrollView>
    )
}