import React, { useState, useEffect, useRef } from 'react';
import Nav from './Component/Nav'

// Header Component
const Header = () => {
  return (
    <>
        <Nav/>
    </>
  );
};

// Chat Item Component
const ChatItem = ({ chat, isActive, onClick, unreadCount }) => {
  return (
    <div
      className={`p-4 border-b border-gray-100 cursor-pointer transition-all hover:bg-gray-50 flex items-center gap-3 ${
        isActive ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-l-orange-500' : ''
      }`}
      onClick={() => onClick(chat)}
    >
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {chat.name.charAt(0)}
        </div>
        {chat.isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-teal-400 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-gray-800 truncate">{chat.name}</h4>
          <span className="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            นักศึกษา
          </span>
        </div>
        <p className="text-gray-600 text-sm truncate">{chat.lastMessage}</p>
      </div>
      <div className="text-right">
        <div className="text-gray-400 text-xs mb-1">{chat.time}</div>
        {unreadCount > 0 && (
          <div className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ chats, activeChat, onChatSelect, searchTerm, onSearchChange }) => {
  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="w-80 bg-white border-r border-gray-200 flex flex-col shadow-lg">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <input
          type="text"
          placeholder="ค้นหาการสนทนา..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-full outline-none focus:border-orange-500 text-sm"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            isActive={activeChat?.id === chat.id}
            onClick={onChatSelect}
            unreadCount={chat.id === 1 ? 2 : 0}
          />
        ))}
      </div>
    </aside>
  );
};

// Message Component
const Message = ({ message, isOwn }) => {
  return (
    <div className={`flex gap-3 mb-4 ${isOwn ? 'flex-row-reverse' : ''} animate-fadeIn`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${
        isOwn ? 'bg-gradient-to-r from-gray-600 to-gray-700' : 'bg-gradient-to-r from-orange-500 to-orange-400'
      }`}>
        {isOwn ? 'คุณ' : message.sender.charAt(0)}
      </div>
      <div className={`flex-1 max-w-xs md:max-w-md ${isOwn ? 'text-right' : ''}`}>
        <div className={`p-3 rounded-2xl shadow-sm ${
          isOwn 
            ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white' 
            : 'bg-white border border-gray-100'
        }`}>
          {message.content}
          {message.jobCard && (
            <div className="bg-gray-50 border-l-4 border-orange-500 p-3 rounded-lg mt-2">
              <div className="font-semibold text-gray-800 mb-1">{message.jobCard.title}</div>
              <div className="text-orange-600 font-bold">{message.jobCard.price}</div>
            </div>
          )}
          {message.quickReplies && (
            <div className="flex flex-wrap gap-2 mt-3">
              {message.quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="bg-orange-100 text-orange-600 border border-orange-300 px-3 py-1 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors"
                  onClick={() => message.onQuickReply?.(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className={`text-xs text-gray-500 mt-1 ${isOwn ? 'text-white/80' : ''}`}>
          {message.time}
        </div>
      </div>
    </div>
  );
};

// Typing Indicator Component
const TypingIndicator = ({ isVisible, sender }) => {
  if (!isVisible) return null;

  return (
    <div className="flex gap-3 mb-4 animate-fadeIn">
      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
        {sender.charAt(0)}
      </div>
      <div className="flex items-center text-gray-500 italic">
        <span className="mr-2">{sender}กำลังพิมพ์...</span>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Chat Header Component
const ChatHeader = ({ activeChat }) => {
  if (!activeChat) return null;

  return (
    <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
          {activeChat.name.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-800">{activeChat.name}</h3>
            <span className="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              นักศึกษา
            </span>
          </div>
          <div className="text-teal-500 text-sm font-medium">● ออนไลน์</div>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full font-medium transition-colors">
          ดูโปรไฟล์
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-colors">
          จ้างงาน
        </button>
      </div>
    </div>
  );
};

// Message Input Component
const MessageInput = ({ onSendMessage, onAttachFile, onAttachImage, onAttachLocation }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  const handleSubmit = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      setTimeout(adjustHeight, 0);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [message]);

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex gap-2 mb-3">
        <button
          onClick={onAttachFile}
          className="bg-gray-100 hover:bg-orange-500 hover:text-white px-3 py-1.5 rounded-xl text-sm transition-colors"
        >
          📎 ไฟล์
        </button>
        <button
          onClick={onAttachImage}
          className="bg-gray-100 hover:bg-orange-500 hover:text-white px-3 py-1.5 rounded-xl text-sm transition-colors"
        >
          📷 รูปภาพ
        </button>
        <button
          onClick={onAttachLocation}
          className="bg-gray-100 hover:bg-orange-500 hover:text-white px-3 py-1.5 rounded-xl text-sm transition-colors"
        >
          📍 สถานที่
        </button>
      </div>
      <div className="flex gap-3 items-end">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="พิมพ์ข้อความ..."
          className="flex-1 min-h-12 max-h-32 px-4 py-3 border-2 border-gray-200 rounded-full outline-none focus:border-orange-500 resize-none"
          rows="1"
        />
        <button
          onClick={handleSubmit}
          disabled={!message.trim()}
          className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 disabled:opacity-50 text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform disabled:hover:scale-100"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

// Chat Messages Component
const ChatMessages = ({ messages, isTyping, activeChat }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-orange-50/30 to-white">
      {messages.map((message) => (
        <Message key={message.id} message={message} isOwn={message.isOwn} />
      ))}
      <TypingIndicator isVisible={isTyping} sender={activeChat?.name || ''} />
      <div ref={messagesEndRef} />
    </div>
  );
};

// Main Chat Component
const ChatApp = () => {
  const [chats] = useState([
    {
      id: 1,
      name: 'อลิซ คณะวิศวกรรมศาสตร์',
      lastMessage: 'สนใจงานติวเตอร์คะ',
      time: '10:30',
      isOnline: true
    },
    {
      id: 2,
      name: 'บ็อบ คณะศิลปกรรม',
      lastMessage: 'รับงานออกแบบโลโก้ได้ครับ',
      time: '09:45',
      isOnline: true
    },
    {
      id: 3,
      name: 'แคโรล คณะบริหารธุรกิจ',
      lastMessage: 'ขอบคุณสำหรับงานครั้งนี้ค่ะ',
      time: 'เมื่อวาน',
      isOnline: false
    },
    {
      id: 4,
      name: 'เดวิด คณะไอที',
      lastMessage: 'พรุ่งนี้ส่งเว็บไซต์ให้นะครับ',
      time: 'เมื่อวาน',
      isOnline: false
    }
  ]);

  const [activeChat, setActiveChat] = useState(chats[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'อลิซ',
      content: 'สวัสดีค่ะ! เห็นว่าคุณโพสต์งานติวเตอร์คณิตศาสตร์ ม.ปลาย หนูสนใจมากเลยค่ะ',
      time: '10:15',
      isOwn: false
    },
    {
      id: 2,
      sender: 'คุณ',
      content: 'สวัสดีครับ ยินดีที่ได้รู้จัก! ช่วยเล่าประสบการณ์การสอนหน่อยได้ไหมครับ',
      time: '10:18',
      isOwn: true
    },
    {
      id: 3,
      sender: 'อลิซ',
      content: 'หนูเรียนคณะวิศวกรรมศาสตร์ ชั้นปี 3 ค่ะ เคยสอนคณิตให้น้องๆ ในหอพักและเพื่อนๆ มาตลอด ผลการเรียนคณิตของหนูได้ A ทุกเทอมเลยค่ะ',
      time: '10:20',
      isOwn: false,
      jobCard: {
        title: 'งานที่สนใจ: ติวเตอร์คณิตศาสตร์ ม.ปลาย',
        price: '800 บาท/ชั่วโมง'
      }
    },
    {
      id: 4,
      sender: 'คุณ',
      content: 'ดีมากเลยครับ! ลูกผมกำลังเตรียมสอบ PAT 1 พอดี คิดว่าสอนได้ไหมครับ?',
      time: '10:25',
      isOwn: true
    },
    {
      id: 5,
      sender: 'อลิซ',
      content: 'ได้เลยค่ะ! หนูเก่งเรื่อง Calculus และ เรขาคณิตวิเคราะห์ค่ะ สอนได้ทั้งพื้นฐานและข้อสอบ PAT',
      time: '10:30',
      isOwn: false,
      quickReplies: ['เริ่มเมื่อไหร่ได้บ้าง?', 'สอนที่ไหนครับ?', 'ค่าเดินทางเท่าไหร่?'],
      onQuickReply: (reply) => handleQuickReply(reply)
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleSendMessage = (messageText) => {
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                      now.getMinutes().toString().padStart(2, '0');
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'คุณ',
      content: messageText,
      time: timeString,
      isOwn: true
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate typing and auto-reply
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        
        let reply = '';
        if (messageText.includes('เริ่ม')) {
          reply = 'เริ่มได้ตั้งแต่สัปดาหน์หน้าเลยค่ะ วันไหนสะดวกคะ?';
        } else if (messageText.includes('สอน') || messageText.includes('ที่ไหน')) {
          reply = 'สอนที่บ้านได้ค่ะ หรือหากสะดวกสามารถไป Library ใกล้บ้านก็ได้ค่ะ';
        } else if (messageText.includes('ราคา') || messageText.includes('เท่าไหร่')) {
          reply = 'ค่าเดินทางไม่เกิน 100 บาท ถ้าในรัศมี 10 กิโลค่ะ';
        } else if (messageText.includes('ขอบคุณ')) {
          reply = 'ด้วยความยินดีค่ะ! หวังว่าจะได้ร่วมงานกันนะคะ 😊';
        } else {
          reply = 'ขอบคุณที่สนใจค่ะ! มีอะไรอยากถามเพิ่มเติมไหมคะ?';
        }
        
        const autoReply = {
          id: messages.length + 2,
          sender: activeChat.name,
          content: reply,
          time: (now.getHours()).toString().padStart(2, '0') + ':' + 
                (now.getMinutes() + 1).toString().padStart(2, '0'),
          isOwn: false
        };
        
        setMessages(prev => [...prev, autoReply]);
      }, 2000);
    }, 500);
  };

  const handleAttachFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx,.txt';
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const now = new Date();
        const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                          now.getMinutes().toString().padStart(2, '0');
        
        const fileMessage = {
          id: messages.length + 1,
          sender: 'คุณ',
          content: `📎 ส่งไฟล์: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`,
          time: timeString,
          isOwn: true
        };
        
        setMessages(prev => [...prev, fileMessage]);
      }
    };
    input.click();
  };

  const handleAttachImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const now = new Date();
        const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                          now.getMinutes().toString().padStart(2, '0');
        
        const imageMessage = {
          id: messages.length + 1,
          sender: 'คุณ',
          content: `📷 ส่งรูปภาพ: ${file.name}`,
          time: timeString,
          isOwn: true
        };
        
        setMessages(prev => [...prev, imageMessage]);
      }
    };
    input.click();
  };

  const handleAttachLocation = () => {
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                      now.getMinutes().toString().padStart(2, '0');
    
    const locationMessage = {
      id: messages.length + 1,
      sender: 'คุณ',
      content: '📍 แชร์ตำแหน่ง: สยามพารากอน กรุงเทพฯ',
      time: timeString,
      isOwn: true
    };
    
    setMessages(prev => [...prev, locationMessage]);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-orange-50 to-white">
      <Header />
      <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full">
        <Sidebar
          chats={chats}
          activeChat={activeChat}
          onChatSelect={setActiveChat}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <main className="flex-1 flex flex-col bg-white">
          <ChatHeader activeChat={activeChat} />
          <ChatMessages 
            messages={messages} 
            isTyping={isTyping} 
            activeChat={activeChat} 
          />
          <MessageInput
            onSendMessage={handleSendMessage}
            onAttachFile={handleAttachFile}
            onAttachImage={handleAttachImage}
            onAttachLocation={handleAttachLocation}
          />
        </main>
      </div>
    </div>
  );
};

export default ChatApp;