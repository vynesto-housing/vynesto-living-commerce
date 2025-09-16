import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gift, Trophy, DollarSign, GraduationCap, Star, ArrowRight, Coins, Target, Award } from 'lucide-react';
import { mockRewards, mockUser } from '@/lib/mockData';

const Rewards = () => {
  const user = mockUser;
  const pointsToKsh = user.profile.rewardPoints / 5; // 5 points = 1 Ksh
  
  const rewardCategories = [
    { key: 'student', label: 'Student Rewards', icon: GraduationCap },
    { key: 'landlord', label: 'Landlord Rewards', icon: Trophy },
    { key: 'vendor', label: 'Vendor Rewards', icon: Award },
  ];

  const achievements = [
    { title: 'Welcome Bonus', description: 'Complete profile setup', points: 1000, completed: true },
    { title: 'First Booking', description: 'Make your first property booking', points: 500, completed: true },
    { title: 'Shopping Spree', description: 'Spend Ksh 5,000 in the marketplace', points: 2500, completed: false, progress: 65 },
    { title: 'Service User', description: 'Book 10 services', points: 1500, completed: false, progress: 30 },
    { title: 'Referral Master', description: 'Refer 5 friends', points: 5000, completed: false, progress: 40 },
  ];

  const getRewardIcon = (type: string) => {
    switch (type) {
      case 'cashback': return DollarSign;
      case 'bursary': return GraduationCap;
      case 'scholarship': return Trophy;
      case 'badge': return Star;
      case 'points': return Coins;
      default: return Gift;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Rewards Program</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Earn points with every booking and purchase. Redeem for cash, bursaries, and exclusive benefits.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Points Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-primary text-white">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Coins className="h-6 w-6" />
                <CardTitle>Reward Points</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{user.profile.rewardPoints.toLocaleString()}</div>
              <div className="text-sm text-white/80">≈ Ksh {pointsToKsh.toLocaleString()} value</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-6 w-6 text-success" />
                <CardTitle>Wallet Balance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success mb-2">
                Ksh {user.profile.walletBalance.toLocaleString()}
              </div>
              <Button variant="outline" size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                Cash Out
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-secondary" />
                <CardTitle>This Month</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary mb-2">2,840 pts</div>
              <div className="text-sm text-muted-foreground">From 3 bookings & 8 purchases</div>
            </CardContent>
          </Card>
        </div>

        {/* Points Conversion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Convert Points to Cash</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-lg font-semibold">Available: {user.profile.rewardPoints.toLocaleString()} points</p>
                <p className="text-sm text-muted-foreground">5 points = Ksh 1</p>
              </div>
              <Button className="bg-success hover:bg-success/90">
                Convert to Ksh {pointsToKsh.toLocaleString()}
              </Button>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Pro Tip:</strong> Save your points for bigger rewards like bursaries and scholarships for maximum value!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Rewards Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Rewards</TabsTrigger>
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockRewards.map((reward) => {
                const RewardIcon = getRewardIcon(reward.type);
                return (
                  <Card key={reward.id} className="hover-lift">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <RewardIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{reward.title}</CardTitle>
                            <Badge variant="secondary" className="mt-1">
                              {reward.category}
                            </Badge>
                          </div>
                        </div>
                        {reward.type === 'cashback' && (
                          <Badge className="bg-success">{reward.value}%</Badge>
                        )}
                        {reward.type === 'bursary' && (
                          <Badge className="bg-primary">Ksh {reward.value.toLocaleString()}</Badge>
                        )}
                        {reward.pointsCost && (
                          <Badge variant="outline">{reward.pointsCost.toLocaleString()} pts</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{reward.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <p className="text-sm font-medium">Requirements:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {reward.requirements.map((req, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className="w-full"
                        disabled={!reward.available}
                      >
                        {reward.pointsCost ? 'Redeem' : 'Learn More'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="student" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockRewards
                .filter(reward => reward.category === 'student')
                .map((reward) => {
                  const RewardIcon = getRewardIcon(reward.type);
                  return (
                    <Card key={reward.id} className="hover-lift">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <RewardIcon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle>{reward.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{reward.description}</p>
                        <Button className="w-full">Claim Reward</Button>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${achievement.completed ? 'bg-success' : 'bg-muted'}`}>
                          <Trophy className={`h-6 w-6 ${achievement.completed ? 'text-white' : 'text-muted-foreground'}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          {!achievement.completed && achievement.progress && (
                            <div className="mt-2">
                              <div className="flex items-center space-x-2">
                                <Progress value={achievement.progress} className="flex-1" />
                                <span className="text-sm text-muted-foreground">{achievement.progress}%</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">+{achievement.points} pts</div>
                        {achievement.completed && (
                          <Badge className="bg-success">Completed</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Points History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Property Booking</p>
                      <p className="text-sm text-muted-foreground">Feb 15, 2024</p>
                    </div>
                    <div className="text-success font-medium">+500 pts</div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Marketplace Purchase</p>
                      <p className="text-sm text-muted-foreground">Feb 12, 2024</p>
                    </div>
                    <div className="text-success font-medium">+150 pts</div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p className="font-medium">Welcome Bonus</p>
                      <p className="text-sm text-muted-foreground">Jan 1, 2024</p>
                    </div>
                    <div className="text-success font-medium">+1000 pts</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Rewards;