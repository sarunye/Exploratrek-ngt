import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, User, Calendar, Trash2, CheckCircle, Lock, Unlock, MessageSquare, BookOpen } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data
const INITIAL_REVIEWS = [
  { id: 1, name: "Sarah J.", rating: 5, date: "2024-01-15", comment: "The Marsabit Forest tour was absolutely breathtaking. The guides were so knowledgeable!", status: "approved" },
  { id: 2, name: "David K.", rating: 5, date: "2024-02-03", comment: "Rock sliding in Ngurunit is a MUST DO! Adrenaline pumping but safe.", status: "approved" },
  { id: 3, name: "Emily R.", rating: 4, date: "2024-02-10", comment: "The Chalbi Desert is otherworldly. Loved the camping experience.", status: "approved" },
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "Why Marsabit Should Be Your Next Adventure",
    date: "March 10, 2024",
    author: "ExploraTrek Team",
    excerpt: "From mist-covered forests to vast deserts, discover why this northern frontier is Kenya's best-kept secret.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "A Day with the Samburu Warriors",
    date: "February 28, 2024",
    author: "James M.",
    excerpt: "Singing, dancing, and stories under the stars. An intimate look into the vibrant culture of the Samburu people.",
    image: "https://images.unsplash.com/photo-1489396160835-779cbf40e878?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Surviving the Chalbi: A Traveler's Guide",
    date: "January 15, 2024",
    author: "Sarah J.",
    excerpt: "Tips and tricks for crossing the only true desert in East Africa. What to pack and how to prepare.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Stories() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });
  const [activeTab, setActiveTab] = useState("reviews");

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      status: "pending"
    };
    setReviews([review, ...reviews]);
    setNewReview({ name: "", comment: "", rating: 5 });
    alert("Thank you! Your review has been submitted for moderation.");
  };

  const deleteReview = (id: number) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  const approveReview = (id: number) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: "approved" } : r));
  };

  const filteredReviews = isAdmin ? reviews : reviews.filter(r => r.status === "approved");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-primary/5 py-12 border-b">
        <div className="container px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Traveler Stories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read inspiring travel diaries, honest reviews, and share your own Marsabit adventure.
          </p>
        </div>
      </div>

      <div className="container px-4 py-12 flex-grow">
        <Tabs defaultValue="reviews" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2">
              <TabsTrigger value="reviews" className="gap-2"><MessageSquare className="w-4 h-4"/> Reviews</TabsTrigger>
              <TabsTrigger value="blog" className="gap-2"><BookOpen className="w-4 h-4"/> Blog</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="reviews" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Review Form */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Write a Review</CardTitle>
                    <CardDescription>Share your experience with us!</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input 
                          id="name" 
                          placeholder="John Doe" 
                          required
                          value={newReview.name}
                          onChange={e => setNewReview({...newReview, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Rating</Label>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewReview({...newReview, rating: star})}
                              className={`p-1 rounded-full hover:bg-accent transition-colors ${newReview.rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                            >
                              <Star className="w-6 h-6 fill-current" />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="comment">Your Review</Label>
                        <Textarea 
                          id="comment" 
                          placeholder="Tell us about your trip..." 
                          required
                          value={newReview.comment}
                          onChange={e => setNewReview({...newReview, comment: e.target.value})}
                        />
                      </div>
                      <Button type="submit" className="w-full">Submit Review</Button>
                    </form>
                  </CardContent>
                  <CardFooter className="pt-4 border-t bg-muted/20 flex justify-center">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setIsAdmin(!isAdmin)}
                      className="text-xs text-muted-foreground gap-2"
                    >
                      {isAdmin ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                      {isAdmin ? "Exit Admin Mode" : "Admin Login"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Reviews List */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-heading text-2xl font-bold">Recent Reviews</h3>
                  {isAdmin && <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Admin Mode Active</span>}
                </div>
                
                <AnimatePresence>
                  {filteredReviews.length === 0 ? (
                    <div className="text-center py-12 bg-muted/20 rounded-xl">
                      <p className="text-muted-foreground">No reviews yet. Be the first to write one!</p>
                    </div>
                  ) : (
                    filteredReviews.map((review) => (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`bg-card border rounded-xl p-6 ${review.status === 'pending' ? 'border-yellow-200 bg-yellow-50/50' : 'border-border/60'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-sm">{review.name}</h4>
                              <p className="text-xs text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-foreground/90">{review.comment}</p>
                        
                        {isAdmin && (
                          <div className="mt-4 pt-4 border-t border-border/50 flex gap-2 justify-end">
                            {review.status === 'pending' && (
                              <Button size="sm" onClick={() => approveReview(review.id)} className="bg-green-600 hover:bg-green-700 h-8">
                                <CheckCircle className="w-3 h-3 mr-1" /> Approve
                              </Button>
                            )}
                            <Button size="sm" variant="destructive" onClick={() => deleteReview(review.id)} className="h-8">
                              <Trash2 className="w-3 h-3 mr-1" /> Delete
                            </Button>
                          </div>
                        )}
                        {review.status === 'pending' && isAdmin && (
                          <div className="mt-2 text-xs text-yellow-600 font-bold uppercase tracking-wider">
                            Pending Approval
                          </div>
                        )}
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="blog">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                      <span>•</span>
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0 text-primary">Read More &rarr;</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
