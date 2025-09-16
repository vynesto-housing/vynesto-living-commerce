import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Home, 
  ShoppingBag, 
  Calendar, 
  Wallet, 
  TrendingUp, 
  Users, 
  Star,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { mockUser, mockProperties } from '@/lib/mockData';

const Dashboard = () => {
  const user = mockUser;

  // Mock dashboard data
  const stats = [
    { label: 'Active Bookings', value: '2', icon: Home, trend: '+1 this month' },
    { label: 'Total Orders', value: '24', icon: ShoppingBag, trend: '+6 this week' },
    { label: 'Points Earned', value: user.profile.rewardPoints.toLocaleString(), icon: Star, trend: '+2.8k this month' },
    { label: 'Wallet Balance', value: `Ksh ${user.profile.walletBalance.toLocaleString()}`, icon: Wallet, trend: '+15% this month' },
  ];

  const recentBookings = [
    {
      id: '1',
      property: mockProperties[0],
      status: 'confirmed',
      checkIn: '2024-02-20',
      checkOut: '2024-06-20',
      amount: 14000
    },
    {
      id: '2', 
      property: mockProperties[1],
      status: 'pending',
      checkIn: '2024-03-01',
      checkOut: '2024-07-01', 
      amount: 24000
    }
  ];

  const recentOrders = [
    { id: '1', item: 'Maize Flour (2kg)', amount: 120, status: 'delivered', date: '2024-02-15' },
    { id: '2', item: 'Rice (5kg)', amount: 450, status: 'pending', date: '2024-02-14' },
    { id: '3', item: 'Student T-Shirt', amount: 800, status: 'delivered', date: '2024-02-10' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-success';
      case 'pending': return 'bg-warning';
      case 'delivered': return 'bg-success';
      case 'cancelled': return 'bg-destructive';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user.profile.firstName}!</h1>
              <p className="text-muted-foreground mt-1">
                {user.profile.university} • {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Reward Points</p>
                <p className="text-2xl font-bold text-primary">{user.profile.rewardPoints.toLocaleString()}</p>
              </div>
              {user.profile.verified && (
                <Badge className="bg-success">
                  <Star className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center space-x-1">
                  <TrendingUp className="h-3 w-3 text-success" />
                  <span>{stat.trend}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Your latest accommodation bookings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{booking.property.title}</p>
                        <p className="text-sm text-muted-foreground flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{booking.property.location}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {booking.checkIn} to {booking.checkOut}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                        <p className="text-sm font-medium mt-1">
                          Ksh {booking.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Bookings
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your latest marketplace purchases</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{order.item}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                        <p className="text-sm font-medium mt-1">
                          Ksh {order.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Orders
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col space-y-2">
                    <Home className="h-6 w-6" />
                    <span>Find Housing</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <ShoppingBag className="h-6 w-6" />
                    <span>Shop Now</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Calendar className="h-6 w-6" />
                    <span>Book Service</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Star className="h-6 w-6" />
                    <span>View Rewards</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>Manage your accommodation bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                              <Home className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{booking.property.title}</h3>
                              <p className="text-sm text-muted-foreground">{booking.property.description}</p>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{booking.property.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{booking.checkIn} - {booking.checkOut}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                            <p className="text-xl font-bold mt-2">Ksh {booking.amount.toLocaleString()}</p>
                            <Button variant="outline" size="sm" className="mt-2">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Track your marketplace purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{order.item}</p>
                        <p className="text-sm text-muted-foreground">Order #{order.id} • {order.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                        <p className="font-medium mt-1">Ksh {order.amount.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <p className="text-lg">{user.profile.firstName} {user.profile.lastName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <p className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{user.email}</span>
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <p className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{user.profile.phone}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">University</label>
                      <p>{user.profile.university}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Account Status</label>
                      <div className="flex items-center space-x-2">
                        <Badge className={user.profile.verified ? 'bg-success' : 'bg-warning'}>
                          {user.profile.verified ? 'Verified' : 'Unverified'}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Member Since</label>
                      <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                
                <Button>Edit Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;