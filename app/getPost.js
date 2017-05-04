export default () => {
  const postArray =[
    {
      id: 0,
      AuthorName: "Michael Kaiser",
      SenderName: "Kate Katey",
      Type: "Picture",
      Caption: "Look at this cool thing!",
      Content: "IMG",
      RightCounter: "42",
      CurrentPost: true
    },
    {
      id: 1,
      AuthorName: "Json Johnson",
      SenderName: "ruby",
      Type: "Text",
      Caption: "Ohhh yeah json in the house",
      Content: "this is a cool text post",
      RightCounter: "5",
      CurrentPost:true,
    },
    {
      id: 2,
      AuthorName: "zozo",
      SenderName: "Json Johnson",
      Type: "Url",
      Caption: "Noooooo he is sick",
      Content: "https://www.Imacoolguy.com",
      RightCounter: "5000",
      CurrentPost: true,
    }
  ];
  return postArray;
}
