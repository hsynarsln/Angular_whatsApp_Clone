import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText:string;
  conversations = [
    {name: "David", time:"8:21", latestMessage: "Hi there!!", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "James", time:"8:21", latestMessage: "OMG!!", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Andrew", time:"8:21", latestMessage: "Let's walk", latestMessageRead: true,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Richard", time:"8:21", latestMessage: "Ok", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Dyno", time:"8:21", latestMessage: "wow", latestMessageRead: true,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Julie", time:"8:21", latestMessage: "Bro", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Tom", time:"8:21", latestMessage: "hey", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Jerry", time:"8:21", latestMessage: "Good Morning!!", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Grey", time:"8:21", latestMessage: "Good Morning!!", latestMessageRead: true,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Jill", time:"8:21", latestMessage: "Good Morning!!", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Blue", time:"8:21", latestMessage: "Good Morning!!", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "King", time:"8:21", latestMessage: "Good Morning!!", latestMessageRead: true,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Kong", time:"8:21", latestMessage: "Good Morning!!", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
    {name: "Rock", time:"8:21", latestMessage: "Good Morning!!", latestMessageRead: false,     
    messages: [
      {id:1, body: 'Hello World', time:'8:21', me:true},
      {id:1, body: 'How are you?', time:'8:21', me:false},
      {id:1, body: 'I am fine thanks', time:'8:21', me:true},
      {id:1, body: 'Glad to hear that', time:'8:21', me:false},
    ],
  },
  ];

  get filteredConversations() {
    return this.conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        conversation.latestMessage
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
