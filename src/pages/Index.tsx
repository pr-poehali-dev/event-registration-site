import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeSection, setActiveSection] = useState("home");
  const { toast } = useToast();

  const events = [
    {
      id: 1,
      title: "Конференция по цифровой трансформации",
      date: "15 ноября 2024",
      time: "10:00 - 18:00",
      location: "Москва, БЦ Лотос",
      description: "Ежегодная конференция для руководителей и специалистов в области цифровых технологий",
      spots: 150,
      category: "Конференция"
    },
    {
      id: 2,
      title: "Семинар: Эффективное управление проектами",
      date: "22 ноября 2024",
      time: "14:00 - 17:00",
      location: "Онлайн",
      description: "Практический семинар по методологиям управления проектами для менеджеров",
      spots: 80,
      category: "Семинар"
    },
    {
      id: 3,
      title: "Бизнес-завтрак: Тренды 2025",
      date: "28 ноября 2024",
      time: "09:00 - 11:00",
      location: "Санкт-Петербург, Отель Астория",
      description: "Закрытая встреча топ-менеджеров для обсуждения бизнес-трендов",
      spots: 40,
      category: "Нетворкинг"
    }
  ];

  const handleRegistration = (e: React.FormEvent, eventTitle: string) => {
    e.preventDefault();
    toast({
      title: "Регистрация успешна!",
      description: `Вы зарегистрированы на мероприятие: ${eventTitle}`,
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-16">
            <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-white rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  Корпоративные мероприятия 2024-2025
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Профессиональные<br />деловые события
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
                  Платформа для регистрации на корпоративные мероприятия, конференции и бизнес-встречи
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                    Календарь событий
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
                    О платформе
                  </Button>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="text-4xl font-bold mb-4">Календарь мероприятий</h2>
                <p className="text-muted-foreground text-lg">Выберите дату и зарегистрируйтесь на интересующее событие</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex justify-center items-start animate-scale-in">
                  <Card className="w-full max-w-md shadow-lg">
                    <CardHeader>
                      <CardTitle>Выберите дату</CardTitle>
                      <CardDescription>Нажмите на дату для просмотра событий</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4 animate-slide-up">
                  <h3 className="text-2xl font-semibold mb-6">Ближайшие события</h3>
                  {events.map((event, index) => (
                    <Card key={event.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge variant="secondary" className="mb-2">{event.category}</Badge>
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                Регистрация
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                              <DialogHeader>
                                <DialogTitle>Регистрация на мероприятие</DialogTitle>
                                <DialogDescription>{event.title}</DialogDescription>
                              </DialogHeader>
                              <form onSubmit={(e) => handleRegistration(e, event.title)} className="space-y-4 mt-4">
                                <div>
                                  <Label htmlFor="name">Фамилия Имя Отчество</Label>
                                  <Input id="name" required className="mt-1" placeholder="Иванов Иван Иванович" />
                                </div>
                                <div>
                                  <Label htmlFor="email">Email</Label>
                                  <Input id="email" type="email" required className="mt-1" placeholder="ivanov@company.com" />
                                </div>
                                <div>
                                  <Label htmlFor="company">Компания</Label>
                                  <Input id="company" required className="mt-1" placeholder="ООО Компания" />
                                </div>
                                <div>
                                  <Label htmlFor="position">Должность</Label>
                                  <Input id="position" required className="mt-1" placeholder="Руководитель отдела" />
                                </div>
                                <div>
                                  <Label htmlFor="comment">Комментарий (опционально)</Label>
                                  <Textarea id="comment" className="mt-1" placeholder="Дополнительная информация" />
                                </div>
                                <Button type="submit" className="w-full">Отправить заявку</Button>
                              </form>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Calendar" size={16} />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Clock" size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="MapPin" size={16} />
                            <span>{event.location}</span>
                          </div>
                          <p className="mt-3 text-muted-foreground">{event.description}</p>
                          <div className="flex items-center gap-2 mt-3 text-sm font-medium">
                            <Icon name="Users" size={16} />
                            <span>Мест доступно: {event.spots}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case "about":
        return (
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in">О нас</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <Icon name="Target" size={32} className="mb-4 text-primary" />
                    <CardTitle>Наша миссия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мы создаем платформу для организации профессиональных деловых мероприятий, 
                      обеспечивая удобный процесс регистрации и максимальную ценность для участников.
                    </p>
                  </CardContent>
                </Card>
                <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
                  <CardHeader>
                    <Icon name="Award" size={32} className="mb-4 text-primary" />
                    <CardTitle>Наши ценности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Профессионализм, качество организации и внимание к деталям — 
                      основа каждого нашего мероприятия.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        );

      case "services":
        return (
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Наши услуги</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "Presentation", title: "Конференции", desc: "Организация крупных отраслевых конференций с международным участием" },
                { icon: "GraduationCap", title: "Семинары и тренинги", desc: "Образовательные мероприятия для профессионального развития" },
                { icon: "Users", title: "Бизнес-встречи", desc: "Организация нетворкинг-событий и деловых завтраков" }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <Icon name={service.icon as any} size={40} className="mb-4 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );

      case "portfolio":
        return (
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Портфолио</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <Card key={item} className="overflow-hidden hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-primary/40" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Мероприятие {item}</CardTitle>
                    <CardDescription>Успешно проведено в 2024 году</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        );

      case "blog":
        return (
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Блог</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { title: "Тренды корпоративных мероприятий 2025", date: "20 октября 2024" },
                { title: "Как организовать эффективную бизнес-конференцию", date: "15 октября 2024" },
                { title: "Цифровые инструменты для управления событиями", date: "10 октября 2024" }
              ].map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-all animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="mt-2">{post.date}</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="ArrowRight" size={20} />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        );

      case "contacts":
        return (
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Контакты</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы ответим на все ваши вопросы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@corporate-events.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>Москва, ул. Примерная, д. 1</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="contact-name">Имя</Label>
                      <Input id="contact-name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Сообщение</Label>
                      <Textarea id="contact-message" className="mt-1" />
                    </div>
                    <Button type="submit" className="w-full">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={28} className="text-primary" />
            <span className="font-bold text-xl">Corporate Events</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {[
              { key: "home", label: "Главная", icon: "Home" },
              { key: "about", label: "О нас", icon: "Info" },
              { key: "services", label: "Услуги", icon: "Briefcase" },
              { key: "portfolio", label: "Портфолио", icon: "FolderOpen" },
              { key: "blog", label: "Блог", icon: "BookOpen" },
              { key: "contacts", label: "Контакты", icon: "Phone" }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`flex items-center gap-2 font-medium transition-colors hover:text-primary ${
                  activeSection === item.key ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </button>
            ))}
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <main>{renderContent()}</main>

      <footer className="border-t mt-16 bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Calendar" size={24} className="text-primary" />
                <span className="font-bold text-lg">Corporate Events</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная платформа для организации корпоративных мероприятий
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Конференции</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Семинары</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Бизнес-встречи</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@corporate-events.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Corporate Events. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
