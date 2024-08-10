import {Pressable, Image} from 'react-native';
import React from 'react';

export default function SongItem() {
  return (
    <Pressable>
      <Image
        source={{
          uri: "https://www.google.com/imgres?q=g%C3%BCl&imgurl=https%3A%2F%2Fwww.yapaycicekdeposu.com%2Fkaliteli-tek-dal-yapay-kirmizi-gul-gul-dali-yapay-cicek-deposu-15118-53-B.jpg&imgrefurl=https%3A%2F%2Fwww.yapaycicekdeposu.com%2Fkaliteli-tek-dal-yapay-kirmizi-gul&docid=5ZlfSPya9ZCy2M&tbnid=-z7XNhmixPnwUM&vet=12ahUKEwib2a_p3MSHAxUaBdsEHb20HnYQM3oECGIQAA..i&w=800&h=1200&hcb=2&ved=2ahUKEwib2a_p3MSHAxUaBdsEHb20HnYQM3oECGIQAA",
        }}
        style={{width: 50, height: 50}}
      />
    </Pressable>
  );
}
